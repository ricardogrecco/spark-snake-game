"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { winnerFormSchema } from "@/app/utils/schema";
import { z } from "zod";

type FormData = z.infer<typeof winnerFormSchema>;

export default function WinnerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(winnerFormSchema),
  });

  const onSubmit = handleSubmit(async (data) => console.log(data));

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
      <button className="btn btn-secondary btn-lg w-full text-lg">
        Submit
      </button>
    </form>
  );
}
