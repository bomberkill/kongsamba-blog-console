import {
    IconMenu2,
    IconIndentDecrease,
    IconIndentIncrease,
  } from "@tabler/icons-react";
  import React from "react";
  import { useThemedLayoutContext } from "@refinedev/mantine";
  import { ActionIcon, MediaQuery } from "@mantine/core";
  
  export const HamburgerMenu: React.FC = () => {
    const {
      siderCollapsed,
      setSiderCollapsed,
      mobileSiderOpen,
      setMobileSiderOpen,
    } = useThemedLayoutContext();
  
    return (
      <>
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <ActionIcon
            variant="subtle"
            color="gray"
            sx={{
              border: "none",
            }}
            size="lg"
            onClick={() => setSiderCollapsed(!siderCollapsed)}
          >
            {siderCollapsed ? (
              <IconIndentIncrease size={20} />
            ) : (
              <IconIndentDecrease size={20} />
            )}
          </ActionIcon>
        </MediaQuery>
        <MediaQuery largerThan="md" styles={{ display: "none" }}>
          <ActionIcon
            variant="subtle"
            color="gray"
            sx={{
              border: "none",
            }}
            size="lg"
            onClick={() => setMobileSiderOpen(!mobileSiderOpen)}
          >
            <IconMenu2 size={20} />
          </ActionIcon>
        </MediaQuery>
      </>
    );
  };
  