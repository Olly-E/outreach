import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { Combobox, Transition } from "@headlessui/react";
import React from "react";
import clsx from "clsx";
import { Option } from "@/app/types";

type HasErrorType = Merge<
  FieldError,
  (
    | Merge<
        FieldError,
        FieldErrorsImpl<{
          name: string;
          id: string;
        }>
      >
    | undefined
  )[]
>;

type SelectFieldProps = {
  className?: string;
  arr: Option[];
  isMultiple?: boolean;
  placeholder?: string;
  hasError?: HasErrorType | undefined;
  hasBorder?: boolean;
  openModal?: () => void;
} & UseControllerProps;

export const SelectFieldWithInput: React.FC<SelectFieldProps> = (props) => {
  const {
    field: { value, onChange, ref },
  } = useController(props);
  const {
    arr,
    className,
    hasError = false,
    placeholder = "Select option",
    isMultiple = false,
    hasBorder = true,
    openModal,
  } = props;

  const [query, setQuery] = React.useState("");

  const filteredArr =
    query === ""
      ? arr
      : arr.filter((obj) =>
          obj.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleInputFocus = (
    event: React.FocusEvent<HTMLInputElement, Element>,
    open: boolean
  ) => {
    if (event.relatedTarget?.id?.includes("headlessui-combobox-button")) return;
    !open && (event.target.nextSibling as HTMLButtonElement)?.click();
  };

  const hasMultipleOption = isMultiple && value && value.length > 0;

  return (
    <div className="w-full">
      <Combobox
        value={isMultiple ? value?.id : value}
        onChange={onChange}
        multiple={isMultiple as true}
      >
        {({ open }) => (
          <div className="relative mt-1">
            <Combobox.Input
              className={clsx(
                "block h-12 w-full rounded-md border border-gray-250 px-4 text-left text-sm text-[#6BF44] outline-none",
                hasError && "border-red-500",
                !hasBorder &&
                  "border-transparent px-0 focus:border-transparent",
                className
              )}
              placeholder={placeholder}
              displayValue={(option: Option | Option[]) => {
                return (option as Option).name;
              }}
              onChange={(event) => setQuery(event.target.value)}
              ref={ref}
              onFocus={(event: React.FocusEvent<HTMLInputElement, Element>) => {
                if (isMultiple) handleInputFocus(event, open);
              }}
            />

            <Combobox.Button
              className={clsx(
                "absolute top-4 right-0 flex items-center pr-2",
                hasError ? "text-red-500" : "text-gray-450"
              )}
            >
              <svg
                className="stroke-current"
                width="14"
                height="15"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 5.34766L7 11.7643L1.75 5.34766"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Combobox.Button>

            {hasMultipleOption && (
              <div className="mt-2 flex flex-wrap gap-2">
                {value
                  .filter((option: Option) => option?.id !== "all")
                  .map((option: Option) => {
                    const handleRemove = (id: string) => {
                      const newValue = value.filter((o: Option) => o.id !== id);
                      onChange(newValue);
                    };
                    return (
                      <div
                        className="flex  items-center space-x-1 bg-secondary/20 pl-2 text-sm"
                        key={option.id}
                      >
                        <p className="py-1">{option?.name}</p>
                        <button
                          type="button"
                          className="p-2 hover:bg-red-400 hover:text-white"
                          onClick={() => handleRemove(option.id)}
                        >
                          <span className="font-medium">x</span>
                        </button>
                      </div>
                    );
                  })}
              </div>
            )}

            <Transition
              as={React.Fragment}
              enter="transition-opacity transition-transform duration-200 origin-center"
              enterFrom="scale-0 opacity-0"
              enterTo="scale-100 opacity-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white py-1 text-base shadow-lg ring-opacity-5 focus:outline-none sm:text-sm">
                {arr.length !== 0 &&
                filteredArr.length === 0 &&
                query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredArr.map((obj, index) => (
                    <Combobox.Option
                      key={obj.id}
                      as={React.Fragment}
                      value={obj}
                    >
                      {({ selected, active }) => (
                        <li
                          className={clsx(
                            "group relative cursor-pointer flex items-center py-2 pl-10 pr-4",
                            active
                              ? "bg-gray-300 bg-opacity-80 text-black"
                              : "text-gray-900",
                            !(filteredArr.length - 1 === index) && "border-b"
                          )}
                        >
                          {selected && (
                            <span
                              className={clsx(
                                "absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900",
                                active ? "text-white" : "text-secondary"
                              )}
                            >
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {obj.name}
                          </span>
                        </li>
                      )}
                    </Combobox.Option>
                  ))
                )}
                {arr.length === 0 && (
                  <p className="w-full px-5 py-1 text-sm text-gray-150">
                    No options
                  </p>
                )}
                {openModal && (
                  <button
                    type="button"
                    onClick={openModal}
                    className="-mb-1 text-sm bg-secondary py-3 text-white w-full rounded-none"
                  >
                    Add New
                  </button>
                )}
              </Combobox.Options>
            </Transition>
          </div>
        )}
      </Combobox>
    </div>
  );
};
