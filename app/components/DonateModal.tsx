import React from "react";
import { Modal } from "./Modal";
import { CancelButton } from "./CancelButton";
import { Button } from "./elements/Button";
import clsx from "clsx";

import { useForm as ReactUseForm, Control } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "./form/InputField";
import { InputFieldPhoneNo } from "./form/InputFieldPhoneNo";
import { SelectFieldWithInput } from "./form/SelectFieldWithInput";
import toast from "react-hot-toast";
import { contactUsSchema } from "../utils/validationSchema";
import { useAllCountries } from "../api/useCountries";
import { ContactUsForm } from "../types";

interface DonateModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
}

const DonateModal = ({
  handleClose,
  modalOpen,
  modalRef,
}: DonateModalProps) => {
  const DONATIONN_OPT = [
    {
      name: "50$",
      id: "50",
    },
    {
      name: "100$",
      id: "100",
    },
    {
      name: "250$",
      id: "250",
    },
    {
      name: "500$",
      id: "500",
    },
  ];

  const [loading, setLoading] = React.useState(false);
  const [donationAmt, setDonationAmt] = React.useState<null | string>(null);

  const {
    reset,
    control,
    register,
    handleSubmit: handleSubmitForm,
    formState: { errors },
  } = ReactUseForm<ContactUsForm>({
    resolver: yupResolver(contactUsSchema),
  });

  const { countries } = useAllCountries();

  const COUNTRIES_OPTION = countries.map(
    (country: { label: string; value: string }) => ({
      name: country.label,
      id: country.value,
    })
  );

  function convertToURLSearchParams<T extends Record<string, any>>(
    data: T
  ): URLSearchParams {
    const params = new URLSearchParams();
    Object.keys(data).forEach((key) => {
      const value = data[key];
      params.append(key, String(value)); // Convert all values to strings
    });
    return params;
  }

  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const onSubmit = async (data: ContactUsForm) => {
    const {
      name,
      email,
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
      country,
      phone,
    } = data;
    const payload = {
      name,
      email,
      addressLine1,
      addressLine2,
      city,
      phone,
      state,
      postalCode,
      //@ts-ignore
      country: country?.name,
      donation: donationAmt,
    };
    console.log(payload);
    setLoading(true);
    const params = convertToURLSearchParams(payload);
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    if (response.ok) {
      console.log("Form successfully submitted");
      toast.success("Form successfully submitted");
      setLoading(false);
      reset(); // Reset form fields assuming reset() is defined somewhere in your component
    } else {
      console.error("Form submission error");
      toast.error("Form submission error");
      setLoading(false);
    }
  };

  return (
    <Modal
      variant="middle"
      className={clsx(
        " xl:w-[1200px] mx-auto justify-center rounded-md bg-white-200 p-6"
      )}
      showDialog={modalOpen}
      closeModal={handleClose}
      modalRef={modalRef}
    >
      <form
        onSubmit={handleSubmitForm(onSubmit)}
        className="text-black pt-6 text-[16px] sm:text-[20px] col-span-3 p-8 mt-10 bg-white h-[700px] overflow-y-auto"
      >
		<div className="flex items-center justify-end">
        <CancelButton
          handleClick={handleClose}
          className="w-[33.91px] min-w-[33.91px] right-0 max-h-[33.91px] h-[33.91px] min-h-[33.91px] rounded"
        />

		</div>
        <p className="mb-4">Amount</p>
        <div className="flex items-center gap-6">
          {DONATIONN_OPT.map((option) => (
            <button
              type="button"
              onClick={() => setDonationAmt(option.name)}
              key={option.id}
              className={clsx(
                "flex px-4 text-sm font-semibold py-2 rounded-md border border-gray-300 items-center",
                option.name === donationAmt
                  ? "bg-blue-800 text-white"
                  : "text-blue-800"
              )}
            >
              {option.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 text-sm sm:text-[18px]">
          <div className="mt-8">
            <p className="">Name</p>
            <InputField
              registration={{ ...register("name") }}
              hasError={errors.name}
              className="mt-2 sm:mt-4"
              isRequired
            />
          </div>
          <div className="mt-8">
            <p className="">Email Address</p>
            <InputField
              registration={{ ...register("email") }}
              hasError={errors.email}
              className="mt-2 sm:mt-4"
              isRequired
            />
          </div>
          <div className="mt-8">
            <p className="mb--4">Country</p>
            <SelectFieldWithInput
              arr={COUNTRIES_OPTION || []}
              name="country"
              control={control as unknown as Control}
              className="border-gray-400 h-[39px] mt-4"
            />
          </div>
          <div className="mt-8">
            <p className="">Address Line 1</p>
            <InputField
              registration={{ ...register("addressLine1") }}
              hasError={errors.addressLine1}
              className="mt-2 sm:mt-4"
              isRequired
            />
          </div>
          <div className="mt-8">
            <p className="">Address Line 2</p>
            <InputField
              registration={{ ...register("addressLine2") }}
              hasError={errors.addressLine2}
              className="mt-2 sm:mt-4"
              isRequired
            />
          </div>
          <div className="mt-8">
            <p className="">City</p>
            <InputField
              registration={{ ...register("city") }}
              hasError={errors.city}
              className="mt-2 sm:mt-4"
              isRequired
            />
          </div>
          <div className="mt-8">
            <p className="">State/Province</p>
            <InputField
              registration={{ ...register("state") }}
              hasError={errors.state}
              className="mt-2 sm:mt-4"
              isRequired
            />
          </div>
          <div className="mt-8">
            <p className="">Zip/Postal Code</p>
            <InputField
              registration={{ ...register("postalCode") }}
              hasError={errors.postalCode}
              className="mt-2 sm:mt-4"
              isRequired
            />
          </div>
          <div className="mt-8">
            <p className="">Mobile Phone Number(optional)</p>
            <InputFieldPhoneNo
              control={control as unknown as Control}
              className="mt-4"
              name="phone"
              hasError={undefined}
              isRequired
            />
          </div>
        </div>
        <Button
          isLoading={loading}
          disabled={loading}
          type="submit"
          className="mt-4 sm:w-[415px] mx-auto"
        >
          {loading ? "Submitting" : "Submit"}
        </Button>
      </form>
    </Modal>
  );
};

export default DonateModal;
