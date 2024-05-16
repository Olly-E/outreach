'use client'
import { Controller, FieldError, UseControllerProps } from 'react-hook-form'
import { CountryCode } from 'libphonenumber-js/core'
import PhoneInput from 'react-phone-number-input'
import clsx from 'clsx'

import { Label } from '../elements/Label'
import { ErrorMessage } from '../ErrorMessage'

type InputFieldPhoneNoProps = {
  label?: string
  className?: string
  hasError: FieldError | undefined
  defaultCountry?: CountryCode | undefined
  errorMessage?: string | undefined
  isRequired?: boolean
} & UseControllerProps

export const InputFieldPhoneNo: React.FC<InputFieldPhoneNoProps> = ({
  label,
  defaultValue,
  className,
  defaultCountry = 'NL',
  isRequired,
  control,
  hasError,
  errorMessage,
  name,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <div>
            {!!label && (
              <Label htmlFor={name} isRequired={isRequired}>
                {label}
              </Label>
            )}
            <PhoneInput
              className={clsx(
                'bg-white-state h-[40px] w-full appearance-none font-WorkSans border rounded-md border-gray-400 outline-none px-4 focus-within:border-gray-550 placeholder:text-gray-250',
                hasError && 'border-red-500 outline-none',
                className
              )}
              defaultCountry={defaultCountry}
              {...field}
              value={defaultValue}
              onChange={(newValue) => field.onChange(newValue)}
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </div>
        )}
      />
    </>
  )
}
