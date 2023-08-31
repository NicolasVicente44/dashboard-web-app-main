import React from "react";
import { Callout, Card, Metric, Text } from "@tremor/react";
import { ExclamationIcon, CheckCircleIcon } from "@heroicons/react/solid";

const CalloutComponent = () => {
  return (
    <>
      <Card className="max-w-full mt-4">
        <Text>Current wind speed: Turbine 1</Text>
        <Metric>18.4knts</Metric>
        <Callout
          className="h-12 mt-4"
          title="Critical speed limit reached"
          icon={ExclamationIcon}
          color="rose"
        >
          Turbine reached critical speed. Immediately reduce turbine speed.
        </Callout>
      </Card>

      <Card className="max-w-full mt-4">
        <Text>Current wind speed: Turbine 2</Text>
        <Metric>7.2knts</Metric>
        <Callout
          className="mt-4"
          title="No critical system data"
          icon={CheckCircleIcon}
          color="teal"
        >
          All systems are currently within their default operating ranges.
        </Callout>
      </Card>
    </>
  );
};

export default CalloutComponent;
