import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import Container from "@/components/Container";
import "./index.css";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="homepage">
      <Container>
        <HomeHeader />
        {children}
        <HomeFooter />
      </Container>
    </div>
  );
};

export default layout;
