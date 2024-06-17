import FooterComponent from "@/components/Footer/footer";
import HeaderComponent from "@/components/Header/header";
import MixedForm from "@/components/forms/form";

export default function SendDocument() {
    return (
      <section className="bg-white">
        <HeaderComponent />
        <MixedForm></MixedForm>
        <FooterComponent />
      </section>
    );
}