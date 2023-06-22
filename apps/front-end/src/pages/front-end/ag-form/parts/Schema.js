export default {
  description: "1.Basic details",
  type: "step",
  properties: {
    1: {
      title: "IDENTIFY_BENEFICIARY",
      type: "object",
      required: ["first_name", "dob"],
      properties: {
        first_name: {
          type: "string",
          title: "FIRST_NAME",
        },
        last_name: {
          type: ["string", "null"],
          title: "LAST_NAME",
        },
        dob: {
          type: "string",
          format: "date",
          label: "DATE_OF_BIRTH",
        },
        role: {
          format: "hidden",
          type: "string",
          default: "beneficiary",
        },
      },
    },
    2: {
      title: "CONTACT_INFORMATION",
      description: "PLEASE_WHATSAPP_NUMBER",
      type: "object",
      required: ["mobile"],
      properties: {
        mobile: {
          type: "string",
          title: "MOBILE_NUMBER",
          format: "MobileNumber",
        },
      },
    },
  },
};
