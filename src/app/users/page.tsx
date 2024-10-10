"use client";
import UserForm from "../components/shared/useForm";

const CreateUser = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>Create User</h1>
      <UserForm />
    </div>
  );
};

export default CreateUser;
