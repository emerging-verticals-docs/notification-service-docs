# Notification Service

The Predix Notification Service is a notification service that notifies list of recipient(s) via email. The service provides a simple and scalable way to provide notification services for user applications. The Predix Notification service is available as a service tile in the Predix Cloud and allows users to create, update and delete tenant and also related configurations through a REST interface.


  - [Usage](#usage)
    - [Creating service instance](#creating-service-instance)
    - [UAA configuration](#uaa-configuration)
        - [Client credentials](#client-credentials)
  - [Notication service](#notification-service)
    - [Get configurations by tenant_uuid](#get-configurations-by-tenant-uuid)
    - [Get configuration by uuid](#get-configuration-by-uuid)
    - [Add configuration](#add-configuration)
    - [Update configuration](#update-configuration)
    - [Delete configuration](#delete-configuration)
    - [Send email using configuration](#send-email-using-configuration)
    - [Get Tenant](#get-tenant)
    - [Get All Events](#get-all-events)
  - [Response codes](#response-codes)
  - [Resources](#resources)
  

## Usage

### Creating service instance


To create an instance of the Predix Notification Service, please use the [Cloud Foundry CLI tool](https://github.com/cloudfoundry/cli) to run the following command:

```
cf create-service notification-service <plan> <service_instance_name> -c '{“trustedIssuerId”: “<predix uaa instance url>/oauth/token”}'
```

Once a service instance is created , you will be issued a tenant uuid for the created service instance.  You can obtain this tenant uuid by binding an application to
the service instance.  You can bind an application to the service instance with the following command:

```
cf bind-service <app_name> <service_instance_name>
```

The application's *VCAP SERVICES* will contain the following variables:

```
"notification-service": [
   {
    "credentials": {
     "catalogUri": "<service url>",
     "tenantUuid": "<tenant uuid>",
     "version": "1",
     "trustedIssuerIds": "<trusted issuers>",
     "zoneOauthScope": "notification.zone.<tenant uuid>.user"
    },
    "label": "notification-service",
    "name": "<service_instance_name>",
    "plan": "<plan>",
    "provider": null,
    "syslog_drain_url": null,
    "tags": [
     "notification",
     "email",
     "audit",
     "event",
     "trail"
    ]
   }
```

**Note** - Please update your [Cloud Foundry CLI tool](https://github.com/cloudfoundry/cli) to the lastest version.

#### UAA configuration

Once a tenant uuid has been issued to your instance you will need to add the **zone-oath-scope** to your UAA instance clients.

##### Client credentials 

To use the notification service with the client credentials flow (the SDK requires this), then you need to add the **zone-oath-scope** to your client authorities.  You can do this using the UAA cli with the following command:

```
uaac client update <client_name> --authorities "<list_of_authorities> notification.zone.<tenant uuid>.user"
```

Tokens issue by this client will now be authorized to use the notification service instance.
  
## Notication service

### Get configurations by tenant_uuid.
* GET /tenants/{tenant_uuid}/configurations
    * parameters
        * tenant_uuid - uuid of tenant

* Sample Response Payload
```
  "payload": [
    {
      "id": 243,
      "uuid": "30465c06-7ab3-47f6-92f7-1deb8b1e2ec9",
      "tenantUuid": "7a18ef3f-c95c-4a89-b9c8-a49d8e3ff37c",
      "protocol": "smtp",
      "host": "smtp.sparkpostmail.com",
      "port": 587,
      "smtpAuth": "true",
      "smtpStarttlsEnable": "true",
      "mailFrom": "clarity-notifications@engagement.digital.ge.com",
      "mailUsername": "SMTP_Injection",
      "mailPassword": "password",
      "timestamp": 1479326129361,
      "lastUpdated": 1479326129382,
      "mailReturnPath": null
    },
    {
      "id": 244,
      "uuid": "60aaa98c-4fda-4e5b-9f7d-b1af6acea4fa",
      "tenantUuid": "7a18ef3f-c95c-4a89-b9c8-a49d8e3ff37c",
      "protocol": "smtp",
      "host": "smtp.sparkpostmail.com",
      "port": 587,
      "smtpAuth": "true",
      "smtpStarttlsEnable": "true",
      "mailFrom": "clarity-notifications@engagement.digital.ge.com",
      "mailUsername": "SMTP_Injection",
      "mailPassword": "password",
      "timestamp": 1481060519229,
      "lastUpdated": 1481060519246,
      "mailReturnPath": null
    }
  ],
  "uuid": "ff40897f-6df9-410d-818e-c25761421907",
  "status": 1000,
  "message": "OK",
  "timestamp": 1481060601465
```

### Get configuration by uuid
* GET /tenants/{tenant_uuid}/configurations/{uuid}
    * parameters
        * tenant_uuid - uuid of tenant
        * uuid - uuid of the configuration (REQUIRED)

* Sample Response Payload
```
  "payload": {
    "id": 243,
    "uuid": "30465c06-7ab3-47f6-92f7-1deb8b1e2ec9",
    "tenantUuid": "7a18ef3f-c95c-4a89-b9c8-a49d8e3ff37c",
    "protocol": "smtp",
    "host": "smtp.sparkpostmail.com",
    "port": 587,
    "smtpAuth": "true",
    "smtpStarttlsEnable": "true",
    "mailFrom": "clarity-notifications@engagement.digital.ge.com",
    "mailUsername": "SMTP_Injection",
    "mailPassword": "password",
    "timestamp": 1479326129361,
    "lastUpdated": 1479326129382,
    "mailReturnPath": null
  },
  "uuid": "f9532152-31e2-4e9e-b9a4-8ccb66957023",
  "status": 1000,
  "message": "OK",
  "timestamp": 1481060706326
```

### Add configuration
* POST /tenants/{tenant_uuid}/configurations
    * URI path parameters
        * tenant_uuid - uuid of tenant
    * Request Body JSON parameters
        * protocol - protocol of mail server (REQUIRED)
        * host - host of mail server (REQUIRED)
        * smtpAuth - smtp auth for mail server (REQUIRED)
        * smtpStarttlsEnable - smtp starttls enable for mail server (REQUIRED)
        * mailFrom - From email address (REQUIRED)
        * mailUsername - mail server user name for authetication (REQUIRED)
        * mailPassword - mail server user password for authetication (REQUIRED)
        * mailReturnPath - mail return path (OPTIONAL)

* Sample Request
```
[
    {
      "protocol": "smtp",
      "host": "smtp.sparkpostmail.com",
      "port": "587",
      "smtpAuth": "true",
      "smtpStarttlsEnable": "true",
      "mailFrom": "clarity-notifications@engagement.digital.ge.com",
      "mailUsername": "SMTP_Injection",
      "mailPassword": "password",
      "mailReturnPath": null
    }
  ]
```

### Update configuration
* PUT tenants/{tenant_uuid}/configurations/{uuid}
    * URI path parameters
        * tenant_uuid - uuid of tenant
        * uuid - uuid of the configuration (REQUIRED)
    * Request Body JSON parameters - Configuration will be over-ridden.
        * protocol - protocol of mail server (OPTIONAL)
        * host - host of mail server (OPTIONAL)
        * smtpAuth - smtp auth for mail server (OPTIONAL)
        * smtpStarttlsEnable - smtp starttls enable for mail server (OPTIONAL)
        * mailFrom - From email address (OPTIONAL)
        * mailUsername - mail server user name for authetication (OPTIONAL)
        * mailPassword - mail server user password for authetication (OPTIONAL)
        * mailReturnPath - mail return path (OPTIONAL)
* Sample Request
```
  "payload": [
    {
      "protocol": "smtp",
      "host": "smtp.sparkpostmail.com",
      "port": "587",
      "smtpAuth": "true",
      "smtpStarttlsEnable": "true",
      "mailFrom": "clarity-notifications@engagement.digital.ge.com",
      "mailUsername": "SMTP_Injection",
      "mailPassword": "password",
      "mailReturnPath": null
    },
  ]
```

### Delete configuration
* DELETE tenants/{tenant_uuid}/configuration/{uuid}
    * parameters
        * tenant_uuid - uuid of tenant
        * uuid - uuid of the configuration (REQUIRED)

* Sample Response Payload
```
  "payload": [
    {
      "protocol": "smtp",
      "host": "smtp.sparkpostmail.com",
      "port": "587",
      "smtpAuth": "true",
      "smtpStarttlsEnable": "true",
      "mailFrom": "clarity-notifications@engagement.digital.ge.com",
      "mailUsername": "SMTP_Injection",
      "mailPassword": "password",
      "mailReturnPath": null
    },
  ]
  "uuid": "ddc7f50a-6883-45aa-a823-b70e47d2a05c",
  "status": 1000,
  "message": "OK",
  "timestamp": 1459470908881
```

### Send email using configuration
* POST /tenants/{tenant_uuid}/email?configuration={configuration_uuid}
    * parameters
        * tenant_uuid - uuid of tenant 
        * configuration_uuid - uuid of configuration
    * Request Body JSON parameters
        * body - Content of the email message (REQUIRED)
        * subject - Email subject (OPTIONAL)
        * fromEmail - Email address from email should be sent. (REQUIRED)
        * fromName - From name (REQUIRED)
        * important - Email importance flag (OPTIONAL)
        * recipient - List of recipients (REQUIRED)
        * recipient.email - email address of the recipient. (REQUIRED)
        * recipient.recipientName - name of the recipient. (REQUIRED)
        * recipient.type - type of the recipient. (REQUIRED) (OPTIONS: to, cc, bcc)
* Sample Request
```
{
  "body":"Content of the email message",
  "subject":"Subject of the email",
  "fromEmail":"from@recipient.com",
  "fromName" :"From name",
  "important" :false,
  "recipients":
  [ 
    {
      "email":"recipient@recipient.com",
      "recipientName":"Recipient email",
      "type":"to"
    }
  ],
  "attachments":null
}
```

* Sample Response Payload
```
{
  "payload": 
  {
    "errors": [],
    "notificationReferenceUuid": "c89c202b-921f-4086-b27d-abc8b700e156"
  },
  "uuid": "d8d26f97-4778-4af3-8312-bfc63477be46",
  "status": 1013,
  "message": "Email message is queued.",
  "timestamp": 1481060912518
}
```

### Get Tenant
* GET tenant/{tenant_uuid}
    * parameters
        * tenant_uuid - uuid of tenant to retrieve

* Sample Response Payload
```
{
  "payload": {
    "id": 20,
    "bindingId": "a114e44e-225b-4701-b5e4-5465730e2f63",
    "uuid": "7a18ef3f-c95c-4a89-b9c8-a49d8e3ff37c",
    "planId": "03863586-9484-430d-ab26-aa050aa3e222",
    "timestamp": 1476989584771,
    "trustedIssuers": "https://8ec6f31a-4084-4951-ad9e-cc7d1501c440.predix-uaa.run.aws-usw02-pr.ice.predix.io/oauth/token",
    "eatUuid": "0fc5b8ff-ab39-4a16-aad6-311c74862cf6",
    "eatStatus": 1,
    "defaultConfigurationUuid": "dde8596d-b1b2-4bd4-9f74-294cb8c97b6d",
    "dailyLimit": 2000,
    "monthlyLimit": 5000,
    "successWebhook": null,
    "failWebhook": null
  },
  "uuid": "0fe5f384-56ff-4118-bf85-edbd98392735",
  "status": 1000,
  "message": "OK",
  "timestamp": 1481593852500
}
```

### Get All Events
'''
Users can retrieve their events using the following API:
  
Sample cUrl command:
 
curl -X GET https://ev-notification-service.run.aws-usw02-pr.ice.predix.io/v1/tenants/{{tenant_uuid}}/events -H 'authorization: bearer {{uaa_token}}' -H 'content-type: application/json'
```

## Response codes
These are the service-specific responses embedded in service responses

* **1000** - OK
* **1001** - Notification configuration does not exist
* **1002** - Notification Tenant does not exist
* **1003** - Encountered exception sending notifications
* **1004** - Tenant ID mismatch
* **1005** - Tenant is missing or blank
* **1006** - Search query is missing or blank
* **1007** - Invalid search query string
* **1008** - Encountered exception adding Configurations
* **1009** - Configurations payload has exceeded the set limit
* **1010** - Configuration Tenant ID mismatch
* **1011** - Email message validation failed
* **1012** - Email message validation failed
* **1013** - Email message is queued
* **1014** - Daily email limit reached
* **1015** - Monthly email limit reached
* **1016** - General failure
* **1017** - Email attachment(s) validation failed

## Resources

* [Notification Service SDK](https://github.build.ge.com/emerging-verticals/notification-sdk) - The accompanying SDK for the notification-service.

* [Notification Service Sample Application](https://github.build.ge.com/emerging-verticals/notification-service-sample) - A sample application which utilizes the Notification Service.
