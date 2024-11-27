import { Tab, Tabs } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useTabsValue } from "../../../hooks/useTabsValue"
import { Link } from "react-router-dom"

const HeaderTabs = () => {
  const { t } = useTranslation()
  const value = useTabsValue()

  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      sx={{ flexGrow: 1, ml: 2 }}
    >
      <Tab
        label={t("products")}
        value="/"
        component={Link}
        to="/"
      />

      <Tab
        label={t("yourCart")}
        value="/shopping-cart"
        component={Link}
        to="/shopping-cart"
      />
    </Tabs>
  )
}

export default HeaderTabs