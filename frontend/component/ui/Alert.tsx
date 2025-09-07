import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority"; // Mengganti `tv` dengan `cva` yang lebih umum
import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";

const alertVariants = cva(
  // PENINGKATAN A: Menggunakan Flexbox untuk alignment yang lebih baik
  "relative flex w-full items-start gap-4 rounded-xl border p-4 shadow-sm", 
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/30 bg-destructive/5 text-destructive [&>svg]:text-destructive",
        success: "border-emerald-500/30 bg-emerald-500/5 text-emerald-600 [&>svg]:text-emerald-500",
        // PENINGKATAN B: Style yang lebih modern dan subtle
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const alertIcons = {
  default: Info,
  destructive: XCircle,
  success: CheckCircle,
};

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, children, ...props }, ref) => {
  const Icon = alertIcons[variant || "default"];
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {/* PENINGKATAN C: Penataan ikon dan konten yang lebih bersih */}
      <Icon className="h-5 w-5 flex-shrink-0" />
      <div className="flex-grow">{children}</div>
    </div>
  );
});
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-foreground/80", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
