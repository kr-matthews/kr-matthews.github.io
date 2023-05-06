import {
  Tabs as ChakraTabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";

export default function Tabs({ data = [] }) {
  return (
    <ChakraTabs variant="enclosed">
      <TabList>
        {data.map(({ name }) => (
          <Tab key={name}>{name}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map(({ name, content }) => (
          <TabPanel key={name}>{content}</TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  );
}
