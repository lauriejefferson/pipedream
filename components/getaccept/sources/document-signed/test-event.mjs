export default {
  "entity": {
    "email_send_subject": "",
    "email_send_message": "",
    "sub_domain": "",
    "custom_domain": "",
    "entity_id": "123123123"
  },
  "document": {
    "id": "123123123",
    "name": "document 01",
    "value": 0,
    "type": "sales",
    "tags": "",
    "external_id": "",
    "external_client_id": "api",
    "external_editor_type": "",
    "external_editor_id": "",
    "company_name": "",
    "company_number": "",
    "company_id": "",
    "company_logo_url": "",
    "unique_id": 0,
    "is_selfsign": true,
    "is_signing_biometric": true,
    "is_signing_initials": false,
    "is_signing_forward": true,
    "is_identify_recipient": false,
    "is_private": false,
    "status": "signed",
    "send_date": "2023-09-12T15:13:23+00:00",
    "sign_date": "2023-09-12T15:18:44+00:00",
    "created_at": "2023-09-12T15:12:06+00:00",
    "user_id": "",
    "sender_name": "Sender Name",
    "sender_thumb_url": "",
    "sender_email": "sender@email.com",
    "email_send_template_id": "123123",
    "parent_id": "123123123",
    "email_send_subject": "{{sender.first_name}} sent you {{document.name}} to review",
    "email_send_message": "Hi {{recipient.first_name}}, \n\nYou have been sent a document to review. \n\nClick the link below to review the document. \n\nBest regards, \n{{sender.fullname}}",
    "is_signing": true,
    "is_signing_order": false,
    "is_signed": true,
    "expiration_date": "2023-09-27T04:59:00+00:00",
    "is_scheduled_sending": false,
    "scheduled_sending_time": null,
    "is_reminder_sending": true,
    "is_video": false,
    "video_id": null,
    "is_auto_comment": true,
    "auto_comment_text": "",
    "is_auto_comment_email": true,
    "auto_comment_email": "",
    "entity_auto_comment_text": "",
    "entity_auto_comment_email": "",
    "field_count": 4,
    "contract_start_date": null,
    "contract_end_date": null,
    "thumb_url": "https://media.getaccept.com/preview/123123123/123123123.png",
    "preview_url": "https://app.getaccept.com/v/preview/123123123?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIqFy1FvcnM",
    "download_url": "https://ga-us-west-2.s3.us-west-2.amazonaws.com/123123123/signed/123123123.pdf?X-Amzn-Trace-Id=Root%3D1-65008151-04efdcd"
  },
  "recipient": {
    "fullname": "Full Name",
    "first_name": "First",
    "last_name": "Last",
    "email": "email@test.com",
    "title": "",
    "note": "",
    "gender": "",
    "mobile": "",
    "thumb_url": "",
    "role": "signer",
    "company_name": "",
    "company_number": "",
    "status": "signed",
    "order_num": "1"
  },
  "custom_fields": {
    "1": "recipient.fullname",
    "": "sender.fullname",
    "123123": "sender",
    "123123": "recipient"
  },
  "event": "document.signed",
  "event_type": "document",
  "event_action": "signed",
  "subscription_id": "123123123"
}