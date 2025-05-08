"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Upload } from "lucide-react";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  resume: z.instanceof(File, {
    message: "Please upload your resume.",
  }),
});

export function JobApplicationForm({ position }: { position: string }) {
  const { toast } = useToast();
  const [dragActive, setDragActive] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Here you would typically send the form data to your server
    console.log(values);
    toast({
      title: "Application Submitted",
      description: "We'll be in touch soon!",
    });
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        form.setValue("resume", e.dataTransfer.files[0]);
      }
    },
    [form]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        form.setValue("resume", e.target.files[0]);
      }
    },
    [form]
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter E-Mail ID</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Mobile No.</FormLabel>
              <FormControl>
                <Input placeholder="+1 (555) 000-0000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="resume"
          render={({ field: { value, ...field } }) => (
            <FormItem>
              <FormLabel>Upload Your Resume</FormLabel>
              <FormControl>
                <div
                  className={`relative flex min-h-[150px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-700 bg-neutral-950/50 p-6 transition-colors ${
                    dragActive ? "border-yellow-400" : ""
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    className="absolute inset-0 cursor-pointer opacity-0"
                    accept=".pdf,.doc,.docx"
                    {...field}
                  />
                  <Upload className="mb-2 h-8 w-8 text-neutral-400" />
                  <p className="text-sm text-neutral-400">
                    Choose a file or drag & drop it here
                  </p>
                  <p className="text-xs text-neutral-500">(jpeg or pdf)</p>
                  {value instanceof File && (
                    <p className="mt-2 text-sm text-yellow-400">{value.name}</p>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full text-black gap-2">
          Submit Application
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}
