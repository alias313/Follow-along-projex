"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface TabWrapperProps {
  a: React.ReactNode;
  b: React.ReactNode;
  c: React.ReactNode;
}

export default function TabWrapper({ a, b, c }: TabWrapperProps) {
  const [activeTab, setActiveTab] = useState("a");

  return (
    <Tabs 
      defaultValue="a" 
      value={activeTab} 
      onValueChange={setActiveTab}
      className="w-full"
    >
      <TabsList className="border-b border-gray-700 w-full bg-transparent p-0 mb-4">
        <TabsTrigger 
          value="a" 
          className={`px-6 py-2 text-lg font-medium rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 data-[state=inactive]:text-gray-400`}
        >
          Tab A
        </TabsTrigger>
        <TabsTrigger 
          value="b" 
          className={`px-6 py-2 text-lg font-medium rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 data-[state=inactive]:text-gray-400`}
        >
          Tab B
        </TabsTrigger>
        <TabsTrigger 
          value="c" 
          className={`px-6 py-2 text-lg font-medium rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 data-[state=inactive]:text-gray-400`}
        >
          Tab C
        </TabsTrigger>
      </TabsList>
      <TabsContent value="a">
        {a}
      </TabsContent>
      <TabsContent value="b">
        {b}
      </TabsContent>
      <TabsContent value="c">
        {c}
      </TabsContent>
    </Tabs>
  );
}
