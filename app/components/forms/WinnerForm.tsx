"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { winnerFormSchema } from "@/app/utils/schema";
import { z } from "zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import { useState } from "react";

type FormData = z.infer<typeof winnerFormSchema>;

export default function WinnerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(winnerFormSchema),
  });

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    if (!executeRecaptcha) {
      console.error("Execute recaptcha not yet available");
      return;
    }

    const recaptchaToken = await executeRecaptcha("submit");

    try {
      const response = await axios.post(
        "/api/recaptcha",
        {
          recaptchaToken,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );

      if (response.data.success) {
        console.log("Recaptcha token verified.", response.data);
        reset();
      } else {
        console.error("Recaptcha token verification failed.", response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className="mb-5 space-y-4">
      <input
        {...register("fullName")}
        placeholder="Full Name"
        className="input input-lg input-bordered w-full bg-white text-primary"
      />
      {errors.fullName && (
        <p className="text-left font-medium">{errors.fullName.message}</p>
      )}
      <input
        {...register("email")}
        placeholder="Email Address"
        className="input input-lg input-bordered w-full bg-white text-primary"
      />
      {errors.email && (
        <p className="text-left font-medium">{errors.email.message}</p>
      )}
      <input
        {...register("phoneNumber")}
        placeholder="Phone Number"
        className="input input-lg input-bordered w-full bg-white text-primary"
      />
      {errors.phoneNumber && (
        <p className="text-left font-medium">{errors.phoneNumber.message}</p>
      )}
      <input
        {...register("addressLine1")}
        placeholder="Address Line 1"
        className="input input-lg input-bordered w-full bg-white text-primary"
      />
      {errors.addressLine1 && (
        <p className="text-left font-medium">{errors.addressLine1.message}</p>
      )}
      <input
        {...register("city")}
        placeholder="City"
        className="input input-lg input-bordered w-full bg-white text-primary"
      />
      {errors.city && (
        <p className="text-left font-medium">{errors.city.message}</p>
      )}
      <input
        {...register("postcode")}
        placeholder="Postcode"
        className="input input-lg input-bordered w-full bg-white text-primary"
      />
      {errors.postcode && (
        <p className="text-left font-medium">{errors.postcode.message}</p>
      )}
      <button
        className="btn btn-secondary btn-lg w-full text-lg"
        disabled={loading}
      >
        {loading && <span className="loading loading-spinner"></span>}
        Submit
      </button>
    </form>
  );
}
