import CompleteComponent from "@/components/Complete/complete";
import FooterComponent from "@/components/Footer/footer";
import HeaderComponent from "@/components/Header/header";

export default function CompleteSendForm() {
  return (
    <section
      className="
      bg-white
        w-full
        "
    >
      <HeaderComponent />
      <CompleteComponent/>
      <FooterComponent />
    </section>
  );
}
