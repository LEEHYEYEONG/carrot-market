import Button from "@/components/button";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";

export default function Write() {
  return (
    <Layout canGoBack title="Write Post">
      <form className="px-4 py-10">
        <TextArea placeholder="Ask a question!" />
        <Button text="Submit" />
      </form>
    </Layout>
  );
}
