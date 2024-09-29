import React from "react";
import { Notifications } from "expo";
import * as Yup from "yup";

import { Alert, Keyboard, View } from "react-native";
import { AppForm, AppFormField as FormField, SubmitButton } from "./forms";

import messagesApi from "../api/messages";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().label("Message"),
});

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller");
    }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller",
    });
  };

  return (
    <View>
      <AppForm
        initialValues={{ message: "" }}
        onSubmit={handleSubmit}
        validationSchem={validationSchema}
      >
        <FormField
          name="message"
          maxLength={255}
          multiline
          numberOfLines={3}
          placeholder="Message"
        />
        <SubmitButton title="Contact Seller" />
      </AppForm>
    </View>
  );
}

export default ContactSellerForm;
