import React from "react";
import Category from "./components/Category";
import PagePadding from "@/components/PagePadding";

const page = async () => {
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt-12"></div>
        {/* carousel */}
      </div>
    </PagePadding>
  );
};

export default page;
