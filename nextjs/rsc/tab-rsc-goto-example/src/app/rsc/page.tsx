import TabWrapper from "../tabs";

function TabContents({ tab }: {tab: "a" | "b" | "c" }) {
  console.log("RENDERING TAB COMPONENTS FOR", tab);

  return <div>{tab}</div>;
}

export default function Home() {
  return (
    <div className="p-16">
      <TabWrapper
        a={<TabContents tab="a" />}
        b={<TabContents tab="b" />}
        c={<TabContents tab="c" />}
      />
    </div>
  );
}
