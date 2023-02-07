import { Box } from "@chakra-ui/react";

const TodoCategorizing = () => {
  return (
    <Box paddingTop="140px">
      <div className="todo-categ">
        <ul className="categories">
          <li>All</li>
          <li>Groceries</li>
          <li>College</li>
          <li>Payments</li>
        </ul>
      </div>
    </Box>
  );
};
export default TodoCategorizing;
