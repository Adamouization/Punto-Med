// src/app/contact/ContactForm.tsx
"use client";

import { useId } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/Button';
import { FadeIn } from '@/components/FadeIn';

function TextInput({
    label,
    ...props
  }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
    let id = useId()
  
    return (
      <div className="group relative z-0 transition-all focus-within:z-10">
        <input
          type="text"
          id={id}
          {...props}
          placeholder=" "
          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        >
          {label}
        </label>
      </div>
    )
  }

  function RadioInput({
    label,
    ...props
  }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
    return (
      <label className="flex gap-x-3">
        <input
          type="radio"
          {...props}
          className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
        />
        <span className="text-base/6 text-neutral-950">{label}</span>
      </label>
    )
  }

  export function ContactForm() {
    const [state, handleSubmit] = useForm("mzzzdlwy"); // Initialize Formspree
  
    return (
      <FadeIn className="lg:order-last">
        {state.succeeded ? ( // Check if the form submission succeeded
          <p className="font-display text-base text-neutral-950 mt-4">Thanks for joining!</p> // Success message
        ) : (
          <form onSubmit={handleSubmit}> {/* Attach handleSubmit to form */}
            <h2 className="font-display text-base font-semibold text-neutral-950">
              Work inquiries
            </h2>
            <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
              <TextInput label="Name" name="name" autoComplete="name" required /> {/* Required field */}
              <TextInput
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                required // Required field
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors} // Display email validation errors
              />
              <TextInput
                label="Company"
                name="company"
                autoComplete="organization"
              />
              <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
              <TextInput label="Message" name="message" />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors} // Display message validation errors
              />
            </div>
            <Button type="submit" className="mt-10" disabled={state.submitting}> {/* Disable button while submitting */}
              Let’s work together
            </Button>
          </form>
        )}
      </FadeIn>
    );
  }