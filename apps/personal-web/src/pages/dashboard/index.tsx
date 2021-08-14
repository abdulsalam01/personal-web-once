import React from "react";
import Layout from "../../components/base/layout";
import Dashboard from "../../components/dashboard/dashboard";

const Index = () => {
  return (
    <Layout children={Dashboard} title={'Homepage'} />
  );
}

export default Index
