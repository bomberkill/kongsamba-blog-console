import React, { Suspense } from "react";
import {
  useGetIdentity,
  useActiveAuthProvider,
  pickNotDeprecated,
  useGetLocale,
  useTranslation,
} from "@refinedev/core";
import { HamburgerMenu } from "./hamburgerMenu";
import {
  ActionIcon,
  Avatar,
  Button,
  Flex,
  Group,
  Header as MantineHeader,
  Menu,
  type Sx,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useThemedLayoutContext, type RefineThemedLayoutV2HeaderProps } from "@refinedev/mantine";
// import { useRouter } from "next/router";
import Link from "next/link";
import {IconLanguage, IconSun, IconMoonStars } from "@tabler/icons-react";
import i18n from "../../app/i18n";

export const ThemedHeaderV2: React.FC<RefineThemedLayoutV2HeaderProps> = ({
  isSticky,
  sticky,
}) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const dark = colorScheme === "dark";
  const authProvider = useActiveAuthProvider();
  // const { data: user } = useGetIdentity({
  //   v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  // });

  const borderColor =
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2];
    const locale = useGetLocale();
    const currentLocale = locale();
    const {changeLocale} = useTranslation();
    // const { locales, asPath: currentPath } = useRouter();
  let stickyStyles: Sx = {};
  if (pickNotDeprecated(sticky, isSticky)) {
    stickyStyles = {
      position: "sticky",
      top: 0,
      zIndex: 1,
    };
  }

  return (
    <Suspense>
      <MantineHeader
        zIndex={199}
        height={64}
        w="100%"
        py={6}
        px="sm"
        sx={{
          borderBottom: `1px solid ${borderColor}`,
          ...stickyStyles,
        }}
      >
        <Group
          sx={{
            height: "100%",
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: "center"
          }}
        >
          <HamburgerMenu />
          <Group>
          <Menu shadow="md">
              <Menu.Target>
                <ActionIcon variant="outline">
                  <IconLanguage size={18} />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                {[...(i18n.languages ?? [])].sort().map((lang: string) => (
                  <Menu.Item
                    key={lang}
                    component="button"
                    onClick={i18n.language === "fr" ? () => changeLocale("en") : () => changeLocale("fr")}
                    // href={currentPath}
                    // locale={lang}
                    
                    color={lang === currentLocale ? "blue" : undefined}
                    icon={
                      <Avatar
                        src={`/images/flags/${lang}.svg`}
                        size={18}
                        radius="lg"
                      />
                    }
                  >
                    {lang === "en" ? "English" : "Français"}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
            <ActionIcon
              variant="outline"
              color={dark ? "yellow" : "primary"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>

            <Flex align="center" gap="sm">
                <Title order={4}  data-testid="header-user-name">John Doe</Title>
              {/* {user?.name && (
              )} */}
                <Avatar src="/images/avatar.png" alt='' radius="xl"/>
              {/* {user?.avatar && (
              )} */}
            </Flex>
          </Group>
        </Group>
      </MantineHeader>
    </Suspense>
  );
};
