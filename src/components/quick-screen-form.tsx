"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useData, screeningInputSchema } from "@/context/DataContext";
import { countries } from "@/lib/countries";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuickScreenForm() {
  const { performScreening, isLoading } = useData();
  const form = useForm({
    resolver: zodResolver(screeningInputSchema),
    defaultValues: {
      fullName: "",
      entityType: "Individual",
      dateOfBirth: "",
      nationality: "",
      country: "",
      additionalInfo: "",
    },
  });

  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="pt-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(performScreening)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-gray-300">Full Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter full name" 
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="dark:text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="entityType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-gray-300">Entity Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                          <SelectValue placeholder="Select entity type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent 
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md z-50"
                      >
                        <SelectItem 
                          value="Individual" 
                          className="dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                        >
                          Individual
                        </SelectItem>
                        <SelectItem 
                          value="Company"
                          className="dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                        >
                          Company
                        </SelectItem>
                        <SelectItem 
                          value="Organization"
                          className="dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                        >
                          Vessel
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="dark:text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="dark:text-gray-300">Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal dark:bg-gray-700 dark:border-gray-600 dark:text-white",
                              !field.value && "text-muted-foreground dark:text-gray-400"
                            )}
                          >
                            {field.value ? (
                              format(new Date(field.value), "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50 dark:opacity-70" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent 
                        className="w-auto p-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md z-50" 
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={(date) =>
                            field.onChange(date ? date.toISOString() : "")
                          }
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                          captionLayout="dropdown"
                          fromYear={1900}
                          toYear={new Date().getFullYear()}
                          className="dark:bg-gray-800"
                          styles={{
                            day: {
                              color: 'var(--foreground)'
                            }
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription className="dark:text-gray-400">Optional for individuals</FormDescription>
                    <FormMessage className="dark:text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-gray-300">Nationality</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                          <SelectValue placeholder="Select nationality" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md z-50 max-h-60 overflow-auto"
                      >
                        {countries.map((country) => (
                          <SelectItem 
                            key={country} 
                            value={country}
                            className="dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                          >
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="dark:text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-gray-300">Country</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md z-50 max-h-60 overflow-auto"
                      >
                        {countries.map((country) => (
                          <SelectItem 
                            key={country} 
                            value={country}
                            className="dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                          >
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="dark:text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel className="dark:text-gray-300">Additional Information (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Address or other identifying information..."
                        className="resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="dark:text-red-400" />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white hover:cursor-default"
              disabled={isLoading}
            >
              <Search className="mr-2 h-4 w-4" />
              {isLoading ? "Screening..." : "AI-Enhanced Screen"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}