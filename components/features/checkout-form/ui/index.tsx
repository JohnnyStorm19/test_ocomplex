"use client";

import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { afterSuccessCheckout, getOrder, validatePhoneNumber } from "../lib";
import { FieldError, MyButton } from "@/components/shared/ui";
import { useCart } from "@/components/shared/providers";
import { checkoutProducts } from "@/components/shared/api";
import toast from "react-hot-toast";

type Input = {
  tel: string;
};

export const CheckoutForm = () => {
  const [value, setValue] = useState(localStorage.getItem("tel") || "");
  const [cart, setCart] = useCart();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    defaultValues: {
      tel: value,
    },
    mode: 'onChange'
  });

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    localStorage.setItem("tel", e.currentTarget.value);
  };

  const onSubmit: SubmitHandler<Input> = async (data) => {
    const checkoutOrder = getOrder(data.tel, cart);
    const res = await checkoutProducts(checkoutOrder);
    if (res.success) {
      afterSuccessCheckout(setCart);
      return;
    }
    toast.error('Произошла ошибка при отправке вашего заказа!')
  };

  return (
    <form className="flex flex-wrap gap-4 justify-center" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="tel"
        rules={{ validate: (value) => {
          return validatePhoneNumber(value) === false ? 'Номер телефона должен быть не меньше 11 чисел' : true
        } }}
        render={({ field: { onChange, name, value } }) => (
          <PatternFormat
            format="+7 (###) ### ####"
            allowEmptyFormatting
            name={name}
            mask="_"
            data-cy="phone"
            className={`w-full p-2 rounded-xl ${errors.tel ? 'border-2 border-red-500 focus-visible:border-2 focus-visible:border-red-500' : ''}`}
            value={value}
            onChange={(e) => {
              onChange(e);
              handleChangePhone(e);
            }}
          />
        )}
      />
      {errors.tel && <FieldError message={errors.tel.message || 'Проверьте номер'} />}
      <MyButton className="min-w-auto" type="submit" handler={() => true}>
        Заказать
      </MyButton>
    </form>
  );
};
