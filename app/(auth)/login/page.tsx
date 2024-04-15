import { ConnectWallet } from "@/components/auth";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">

      <ConnectWallet />
    </div>
  );
};

export default LoginPage;
