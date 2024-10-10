// components/UserForm.tsx
import { useContext } from "react";
import UserContext from "sesionvirtual/app/context/UserContext";
import { TextField, Button, Box } from "@mui/material";

const UserForm = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserForm must be used within a UserProvider");
  }

  const { user, setUser } = userContext;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("User created:", user);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="User Name"
        name="username"
        value={user.username}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Password"
        name="password"
        value={user.password}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained">
        Create User
      </Button>
    </Box>
  );
};

export default UserForm;
