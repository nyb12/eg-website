import { Box } from "native-base";
import React from "react";
import { t } from "@shiksha/common-lib";

export default function Chip({ label, children, isActive, ...props }) {
  return (
    <Box
      bg={isActive ? "primary.500" : "primary.100"}
      _text={{
        color: isActive ? "white" : "black",
      }}
      rounded={"full"}
      py="1"
      px="2"
      m="1"
      {...props}
    >
      {children ? children : label}
    </Box>
  );
}

// ChipStatus
export function ChipStatus({ status, ...props }) {
  const [color, setColor] = React.useState("appliedColor");
  const [newStatus, setNewStatus] = React.useState(status);

  React.useEffect(() => {
    switch (status && status?.toLowerCase()) {
      case "screened":
        setColor("screenedColor");
        setNewStatus(t("SCREENED"));
        break;
      case "rejected":
        setNewStatus(t("REJECTED"));
        setColor("rejectedColor");
        break;
      case "shortlisted_for_orientation":
        setNewStatus(t("SHORTLISTED_FOR_ORIENTATION"));
        setColor("shortlistedColor");
        break;
      case "potential_prerak":
        setNewStatus(t("POTENTIAL_PRERAK"));
        setColor("potentialColor");
        break;
      case "selected_for_training":
        setNewStatus(t("SELECTED_FOR_TRAINING"));
        setColor("selectedColor");
        break;
      case "selected_for_onboarding":
        setNewStatus(t("SELECTED_FOR_ONBOARDING"));
        setColor("selectedColor");
        break;
      case "selected_prerak":
        setNewStatus(t("SELECTED_PRERAK"));
        setColor("selectedColor");
        break;
      case "quit":
        setNewStatus(t("QUIT"));
        setColor("rejectedColor");
        break;
      case "rusticate":
        setNewStatus(t("RUSTICATE"));
        setColor("rejectedColor");
        break;
      case "yes":
        setNewStatus(t("YES"));
        setColor("potentialColor");
        break;
      case "no":
        setNewStatus(t("NO"));
        setColor("dangerColor");
        break;
      default:
        setNewStatus(t("APPLIED"));
        setColor("appliedColor");
    }
  }, [status]);

  return (
    <Chip
      px="4"
      bg={color}
      label={newStatus}
      _text={{ textTransform: "capitalize" }}
      rounded="sm"
      {...props}
    />
  );
}
