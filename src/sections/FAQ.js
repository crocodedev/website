import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import FAQStack from "@/components/FAQ/FAQStack";
import FAQColumn from "@/components/FAQ/FAQColumn";
import FAQItem from "@/components/FAQ/FAQItem";

const data = {
  title: "questions you might have",
  items: [
    {
      title: "Amet minim mollit non deserunt ullamco est sit aliqua?",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim illo sunt aliquid similique nemo corrupti nulla praesentium in quae necessitatibus asperiores, repudiandae, natus quod. Labore cupiditate dolore suscipit ab sapiente?",
    },
    {
      title: "Amet minim mollit non deserunt ullamco est sit aliqua?",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim illo sunt aliquid similique nemo corrupti nulla praesentium in quae necessitatibus asperiores, repudiandae, natus quod. Labore cupiditate dolore suscipit ab sapiente?",
    },
    {
      title: "Amet minim mollit non deserunt ullamco est sit aliqua?",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim illo sunt aliquid similique nemo corrupti nulla praesentium in quae necessitatibus asperiores, repudiandae, natus quod. Labore cupiditate dolore suscipit ab sapiente?",
    },
    {
      title: "Amet minim mollit non deserunt ullamco est sit aliqua?",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim illo sunt aliquid similique nemo corrupti nulla praesentium in quae necessitatibus asperiores, repudiandae, natus quod. Labore cupiditate dolore suscipit ab sapiente?",
    },
    {
      title: "Amet minim mollit non deserunt ullamco est sit aliqua?",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim illo sunt aliquid similique nemo corrupti nulla praesentium in quae necessitatibus asperiores, repudiandae, natus quod. Labore cupiditate dolore suscipit ab sapiente?",
    },
    {
      title: "Amet minim mollit non deserunt ullamco est sit aliqua?",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim illo sunt aliquid similique nemo corrupti nulla praesentium in quae necessitatibus asperiores, repudiandae, natus quod. Labore cupiditate dolore suscipit ab sapiente?",
    },
    {
      title: "Amet minim mollit non deserunt ullamco est sit aliqua?",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim illo sunt aliquid similique nemo corrupti nulla praesentium in quae necessitatibus asperiores, repudiandae, natus quod. Labore cupiditate dolore suscipit ab sapiente?",
    },
    {
      title: "Amet minim mollit non deserunt ullamco est sit aliqua?",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim illo sunt aliquid similique nemo corrupti nulla praesentium in quae necessitatibus asperiores, repudiandae, natus quod. Labore cupiditate dolore suscipit ab sapiente?",
    },
    {
      title: "Amet minim mollit non deserunt ullamco est sit aliqua?",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim illo sunt aliquid similique nemo corrupti nulla praesentium in quae necessitatibus asperiores, repudiandae, natus quod. Labore cupiditate dolore suscipit ab sapiente?",
    },
    {
      title: "Amet minim mollit non deserunt ullamco est sit aliqua?",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim illo sunt aliquid similique nemo corrupti nulla praesentium in quae necessitatibus asperiores, repudiandae, natus quod. Labore cupiditate dolore suscipit ab sapiente?",
    },
  ],
};

const FAQ = () => (
  <SectionWrapper bgColor="paper">
    <Container>
      <SectionHeading title={data.title} />
      <FAQStack>
        <FAQColumn>
          {data.items.slice(0, data.items.length / 2).map(({ title, text }) => (
            <FAQItem key={title} title={title} text={text} />
          ))}
        </FAQColumn>
        <FAQColumn>
          {data.items.slice(data.items.length / 2).map(({ title, text }) => (
            <FAQItem key={title} title={title} text={text} />
          ))}
        </FAQColumn>
      </FAQStack>
    </Container>
  </SectionWrapper>
);

export default FAQ;
