import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Components/Ui/Button";
import { CircularProgress } from "@mui/material";
import MainTitle from "../Components/Ui/MainTitle";
import { formLoginInputs } from "../helpers/Data";
import { notify } from "../helpers/Functions";
import { IFormLoginField } from "../interfaces";
import InputLogin from "../Components/Ui/InputLogin";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../RTK/Store";
import { login } from "../RTK/features/Auth/Auth";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  //----------HANDLERS----------//
  const orderSchema = z.object({
    email: z.string().min(3, "email is required").email("enter valid email"),
    password: z.string(),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormLoginField>({
    mode: "onChange",
    resolver: zodResolver(orderSchema),
  });
  const onSubmit: SubmitHandler<IFormLoginField> = (data) => {
    setIsLoading(true);

    if (data) {
      if (data.password === "techno") {
        //store flag that user is login
        dispatch(login());
        notify("success", "Login successfully");
        setIsLoading(false);
        reset();
        navigate("/");
      } else notify("error", "Login Failed");
      setIsLoading(false);
    } else notify("error", "Login Failed");
  };
  //----------RENDERS----------//

  const renderInputsForm = formLoginInputs.map((item) => (
    <InputLogin
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
        <MainTitle title="Login" color="text-background" height="py-6" />
        <p className="text-center">password:techno</p>
        <p className="text-center">email:email@gmail.com</p>
        <div className="sm:mx-auto sm:w-full ">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {renderInputsForm}
            <div>
              <Button classes="bg-primary w-full h-8 rounded-md font-bold text-secondary flex items-center justify-center">
                {" "}
                {isLoading ? (
                  <CircularProgress color="primary" size={20} />
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
