import Input from "../Ui/Input";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IFormFields } from "../../interfaces";
import { formOrderInputs } from "../../helpers/Data";
import MainTitle from "../Ui/MainTitle";
import { CircularProgress } from "@mui/material";
import Button from "../Ui/Button";
import { notify } from "../../helpers/Functions";

interface IFormContactProps {}
// eslint-disable-next-line no-empty-pattern
const FormOrder = ({}: IFormContactProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //----------HANDLERS----------//
  const orderSchema = z.object({
    name: z.string().min(3, "first name is required at least 3 characters"),
    phone: z
      .string()
      .regex(
        /^(0)(10|11|15)\d{8}$/,
        "Invalid phone number format (010/011/015) only"
      ),
    address: z.string().min(10, "address is required at least 10 characters"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormFields>({
    mode: "onChange",
    resolver: zodResolver(orderSchema),
  });
  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    setIsLoading(true);
    if (data) {
      notify("success", "order successfully");
    }
    setTimeout(() => {
      console.log(data);

      setIsLoading(false);
      console.log("form submitted");
    }, 1000);
  };
  //----------RENDERS----------//

  const renderInputsForm = formOrderInputs.map((item) => (
    <Input
      id={item.id}
      label={item.label}
      name={item.name}
      type={item.type}
      key={item.id}
      register={register}
      errors={errors}
    />
  ));

  return (
    <div className="flex flex-1 flex-col w-full md:w-1/2 mx-auto pb-16">
      <section className="container">
        <MainTitle title="Location" color="text-background" height="py-6" />
        <div className="sm:mx-auto sm:w-full ">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {renderInputsForm}
            <div>
              <Button classes="bg-primary w-full h-8 rounded-md font-bold text-secondary flex items-center justify-center">
                {" "}
                {isLoading ? (
                  <CircularProgress color="primary" size={20} />
                ) : (
                  "Send"
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FormOrder;
