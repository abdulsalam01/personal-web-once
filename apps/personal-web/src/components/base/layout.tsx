import React, { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

type Attribute = {
  children?: ReactNode
  title?: string
}

const Layout = ({children, title = 'Personal Web'}: Attribute) => {
  return (
    <div>
      <Header title={title} metaDesc={'desc'} metaKeywords={'keywords'}/>
      {children}
      <Footer/>
    </div>
  );
}

export default Layout
