import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ className, label, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);

  return (
    <div className="relative w-full">
      <Input
        className={cn(
          "transition-all duration-200 ease-in-out",
          (isFocused || hasValue) && "",
          className,
        )}
        ref={ref}
        {...props}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== "");
          props.onBlur?.(e);
        }}
        onChange={(e) => {
          setHasValue(e.target.value !== "");
          props.onChange?.(e);
        }}
      />
      <label
        className={cn(
          "absolute left-3 top-1/2 -z-10 -translate-y-1/2 transform transition-all duration-200 ease-in-out",
          (isFocused || hasValue) &&
            "text-primary left-3 top-0 z-10 rounded-full bg-white px-2 text-xs",
        )}
      >
        {label}
      </label>
    </div>
  );
});
FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingLabelInput };
