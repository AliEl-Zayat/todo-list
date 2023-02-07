import { Box, Divider } from "@chakra-ui/react";
import TodoCategorizing from "./Components/TodoCategorizing";
import TodoList from "./Components/TodoList";
const App = () => {
  return (
    <Box bgColor="#fff" borderRadius="8px" display="flex" w="986px">
      <TodoCategorizing />
      <Divider
        opacity="1"
        orientation="vertical"
        height="prose"
        borderWidth="1px"
        marginInline="51px"
      />
      <TodoList />
    </Box>
  );
};
export default App;
