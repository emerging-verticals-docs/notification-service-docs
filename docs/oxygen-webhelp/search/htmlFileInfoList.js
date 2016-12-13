fil = new Array();
fil["0"]= "c_about_the_notification_service.html@@@About the Notification Service@@@The Predix Notification service is a notification service that notifies list of recipients via email. The service provides a simple and scalable way to provide notification services for user...";
fil["1"]= "c_about_view_service.html@@@About the View Service@@@View service overview...";
fil["2"]= "c_additional_resources.html@@@Additional Resources@@@Links to resources: Notification Service SDK – See https://github.build.ge.com/emerging-verticals/notification-sdk . The accompanying SDK for the Notification service. Notification Service Sample...";
fil["3"]= "c_application_development_with_predix_ui.html@@@Application Development with Predix UI@@@As a developer, you should understand these web technologes before using Predix UI...";
fil["4"]= "c_cards.html@@@Cards@@@A card is a component that can be shared across different environments. A card acts as a container that resides within the content area of the screen. It can contain embedded data for use when...";
fil["5"]= "c_context.html@@@Context@@@Context is the environment and manner in which the object or system is being used by the user or by other parts of the system. It is represented by its own current state and the state of the system...";
fil["6"]= "c_decks.html@@@Decks@@@A deck is a component that uses a specified layout to determine the arrangement of cards . You can use a View service API to save the complete context of a deck. Saving a card within a deck calls the...";
fil["7"]= "c_polymer_library.html@@@Polymer Library@@@The Predix UI repositories are implemented using the Polymer library...";
fil["8"]= "c_predix_ui_basics_repositories.html@@@Predix UI Basics Repositories@@@Predix UI Basics descriptions...";
fil["9"]= "c_predix_ui_components_repositories.html@@@Predix UI Components Repositories@@@Predix UI Components descriptions...";
fil["10"]= "c_predix_ui_css_layout_libraries.html@@@Predix UI CSS Layout Libraries@@@The PredixDev public GitHub organization stores a set of Predix UI CSS layout libraries to create base layout design for a web application...";
fil["11"]= "c_predix_ui_css_overview.html@@@Predix UI CSS Overview@@@The Predix UI platform includes the Predix UI CSS libraries in the PredixDev public GitHub organization to create intricate user interactions in a web application...";
fil["12"]= "c_predix_ui_css_utilities_libraries.html@@@Predix UI CSS Utilities Libraries@@@The PredixDev public GitHub organization stores a set of Predix UI CSS utilities libraries to ensure consistent design in a web application...";
fil["13"]= "c_predix_ui_css_visual_libraries.html@@@Predix UI CSS Visual Libraries@@@The PredixDev public GitHub organization stores a set of Predix UI CSS visual libraries to create base content design for a web application...";
fil["14"]= "c_predix_ui_glossary.html@@@Predix UI Glossary@@@As a developer, you should understand these Predix UI terms and definitions...";
fil["15"]= "c_predix_ui_mobile.html@@@Predix UI Mobile Components@@@Predix UI Mobile Components descriptions...";
fil["16"]= "c_predix_ui_overview.html@@@Predix UI Overview@@@The Predix UI platform provides the ability to create modern web applications that run on top of Predix data and services...";
fil["17"]= "c_predix_ui_repository_overview.html@@@Predix UI Repository Overview@@@Predix UI repository concepts...";
fil["18"]= "c_predix_ui_seed_overview.html@@@Predix UI Seed Overview@@@The Predix UI Seed uses the Predix UI platform to deploy to your local development environment or Cloud Foundry...";
fil["19"]= "c_predix_ui_templates_repositories.html@@@Predix UI Templates Repositories@@@Predix UI Templates descriptions...";
fil["20"]= "c_query_with_filters.html@@@Query Data with Filters@@@Overview of using a REST client to query data with filters...";
fil["21"]= "c_response_codes.html@@@Reponse Codes@@@The following are service-specific responses embedded in service responses: 1000 – OK. 1001 – Notification configuration does not exist. 1002 – Notification Tenant does not exist. 1003 – Encountered...";
fil["22"]= "c_saml_federation_using_uaa.html@@@Managing Identity Providers@@@An Identity Provider (IdP) manages accounts for users who may need secure access to the applications or services. A Service Provider (SP) is the server receiving request from a user for access to...";
fil["23"]= "c_security_integration_with_platform_services.html@@@Understanding Platform Services@@@The Predix platform offers microservices through the Predix Catalog. The microservices are provisioned in the Cloud Foundry marketplace. You can select the microservices to use depending on your...";
fil["24"]= "c_supported_browsers_for._web_applications.html@@@Supported Browsers for Web Applications@@@The Predix UI platform has been tested to support these web broswers and opeating systems...";
fil["25"]= "c_uaa_service_overview.html@@@About the User Account and Authentication Service@@@User Account and Authentication (UAA) is a web service provided by Cloud Foundry to manage users and OAuth2 clients. Its primary role is as an OAuth2 provider, issuing tokens for client applications...";
fil["26"]= "c_updating_the_oauth_client_using_uaac.html@@@Updating the OAuth2 Client Using UAAC@@@Optional procedure for updating the OAuth2 client using UAAC instead of the graphical user interface in Predix.io...";
fil["27"]= "r_add_configuration.html@@@Add Configuration@@@This service creates or adds configurations. METHOD POST URI POST /tenants/{tenant_uuid}/configurations Sample Request [ {  protocol :  smtp ,  host :  smtp.sparkpostmail.com ,  port :  587...";
fil["28"]= "r_authorities_or_scopes_required_for_services.html@@@Authorities or Scopes Required for Platform Services@@@When you create a new OAuth2 client, the client is assigned default scopes and authorities. You must add additional authorities or scopes that are specific to each service. The following table lists...";
fil["29"]= "r_delete_configuration.html@@@Delete Configuration@@@This service deletes a configuration. METHOD DELETE URI DELETE tenants/{tenant_uuid}/configuration/{uuid} Path Parameters Parameter Description Required? tenant_uuid UUID of the tenant. Yes uuid UUID...";
fil["30"]= "r_get_configuration_by_uuid.html@@@Get Configuration by UUID@@@This service returns a uuid. METHOD GET URI GET /tenants/{tenant_uuid}/configurations/{uuid} Path Parameters Parameter Description Required? tenant_uuid UUID of the tenant. Yes uuid UUID of the...";
fil["31"]= "r_get_configurations_by_tenant_uuid.html@@@Get Configurations by Tenant_UUID@@@This service returns a tenant_uuid. METHOD GET URI GET /tenants/{tenant_uuid}/configurations Path Parameters Parameter Description Required? tenant_uuid UUID of the tenant. Yes Sample Response Payload...";
fil["32"]= "r_get_tenant.html@@@Get Tenant@@@This service returns the tenant. METHOD GET URI GET tenant/{tenant_uuid} Path Parameters Parameter Description Required? tenant_uuid UUID of the tenant to retrieve. Yes Sample Response Payload...";
fil["33"]= "r_notification_service_setup.html@@@Notification Service Setup@@@Authentication for the Notification service is controlled by the designated trusted issuer and is managed by the User Account and Authentication (UAA) web service. You must set up a UAA service...";
fil["34"]= "r_send_email_using_the_configuration.html@@@Send Email Using the Configuration@@@This service sends email notifications using the configuration. METHOD POST URI POST /tenants/{tenant_uuid}/email?configuration={configuration_uuid} Sample Request {  body : Content of the email...";
fil["35"]= "r_uaa_service_setup.html@@@UAA Service Setup@@@You must set up a UAA service instance as the trusted issuer before getting started with any Predix platform service. Task Roadmap # Task Description 1 (Optional) Configure your proxy settings if...";
fil["36"]= "r_update_configuration.html@@@Update Configuration@@@This service updates the configuration. METHOD PUT URI PUT tenants/{tenant_uuid}/configurations/{uuid} Sample Request {  protocol :  smtp ,  host :  smtp.gmail.com ,  port : 587,  smtpAuth :  true...";
fil["37"]= "r_view_service_database_operations.html@@@View Service Database Operations@@@View service API operations on card and deck objects...";
fil["38"]= "t_adding_zone_token_scopes_to_your_application.html@@@Adding Zone Token Scopes to Your Application@@@Once a tenant UUID has been issued to your instace, you will need to add the zone-oath-scope to your UAA instance clients. To use the Notification service with the client credentials flow (the SDK...";
fil["39"]= "t_associating_a_card_with_a_deck.html@@@Associating a Card with a Deck@@@Procedure for associating a card with a deck in the View service database...";
fil["40"]= "t_binding_an_app_to_the_uaa_instance.html@@@Binding an Application to the UAA Instance@@@You must bind your application to your UAA instance to provision its connection details in the VCAP_SERVICES environment variable. The Cloud Foundry runtime uses the VCAP_SERVICES environment variable...";
fil["41"]= "t_binding_to_a_service_instance.html@@@Binding Your Application to a Service Instance@@@Your application must be available in Cloud Foundry. To learn about deploying your application to Cloud Foundry, see Creating a Simple Predix Hello World Web App . You must bind your application to...";
fil["42"]= "t_binding_your_application_to_the_notification_service.html@@@Binding Your Application to the Notification Service Instance@@@You must bind your application to the Notification service instance to provision connection details and credentials for your Notification service instance in the VCAP_SERVICES environment variable...";
fil["43"]= "t_configuring_predix_ui_css_starter_kit.html@@@Configuring the Predix UI CSS Starter Kit@@@Configure the utilities used with the Predix UI CSS starter kit to process the project SASS (.scss) file into CSS...";
fil["44"]= "t_configuring_uaa_as_identity_provider.html@@@Configuring UAA as an Identity Provider@@@If you have applications that provide Service Provider (SP) capability (For example, GitHub Enterprise or ServiceNow), you can configure UAA as an Identity Provider (IdP...";
fil["45"]= "t_configuring_uaa_as_service_provider_for_external_identity_provider.html@@@Configuring UAA as Service Provider for External Identity Provider@@@If you provision your user accounts remotely on an IdP such as Company SSO, you can configure UAA as Service Provider (SP) that redirects to external IdP...";
fil["46"]= "t_connecting_your_app_to_a_platform_service_instance.html@@@Connecting Your Application to a Platform Service Instance@@@To establish communication between the service instance that you have created and your application, you bind your application to the service instance...";
fil["47"]= "t_creating_a_card_instance.html@@@Creating a Card@@@Procedure for creating a card instance in the View service database...";
fil["48"]= "t_creating_a_deck_instance.html@@@Creating a Deck@@@Procedure for creating a deck instance in the View service database...";
fil["49"]= "t_creating_a_notification_service_instance.html@@@Creating a Notification Service Instance@@@To create a service instance using a command line: Note: The following steps are performed using the Cloud Foundry CLI tool. It is found at: https://github.com/cloudfoundry/cli . Make sure you have...";
fil["50"]= "t_creating_a_platform_service_instance.html@@@Creating a Platform Service Instance@@@You can use the Cloud Foundry CLI to create a platform service instance...";
fil["51"]= "t_creating_a_simple_predix_hello_world_web_app.html@@@Creating a Simple Predix Hello World Web App@@@Create and deploy a simple web application...";
fil["52"]= "t_creating_a_uaa_service_instance_for_predix_ui_seed.html@@@Creating a UAA Service Instance for the Predix UI Seed@@@Sign into your Predix account at https://www.predix.io. Navigate to Catalog &gt; Services , then click the User Account and Authentication tile. Click Subscribe on the required plan. Complete the fields...";
fil["53"]= "t_creating_an_oauth_client.html@@@Creating an OAuth2 Client@@@You can use the UAA command-line interface (UAAC) instead of UAA Dashboard to create an OAuth2 client...";
fil["54"]= "t_creating_groups_in_uaa_instance.html@@@Creating Groups in a UAA Instance@@@If you design your application to authorize using specific scopes, you can create groups corresponding to those scopes in UAA and assign users to those groups. When the users log into your web application, the application redirects them to UAA. If a user is in the specified group and you chose to authorize the web application with that scope, the web application gets a signed token that contains that scope...";
fil["55"]= "t_creating_password_policy.html@@@Creating Password Policies@@@You can configure the settings for clients in UAA for password policy such as length, accepted or required character types, expiration times, and reset policy...";
fil["56"]= "t_creating_uaa_instance.html@@@Creating a UAA Service Instance@@@Optional procedure for using the command line instead of the graphical user interface to create a UAA service instance...";
fil["57"]= "t_creating_users_in_uaa_instance.html@@@Creating Users in a UAA Instance@@@Optional procedure for creating users in a UAA instance using UAAC instead of graphical user interaface...";
fil["58"]= "t_customize_web_applications_with_predix_ui.html@@@Customizing Web Applications with Predix UI@@@Customize web applications tasks...";
fil["59"]= "t_defining_proxy_connections_to_remote_resources.html@@@Defining Proxy Connections to Remote Resources@@@If traffic between your corporate network and the internet is monitored, access to certain tools (cURL, Maven, Git, Eclipse, and so on) may be blocked by the proxy...";
fil["60"]= "t_displaying_a_multicard_.deck.html@@@Displaying a Multi-Card Deck@@@Procedure for setting up a web application to display a deck with two cards...";
fil["61"]= "t_getting_started_with_view_service.html@@@Getting Started with View Service@@@Set up a UAA service instance as the trusted issuer. See UAA Service Setup for more information. Follow these steps to set up the View service: Create a View service instance. See Creating a View...";
fil["62"]= "t_installing_predix_ui_css_starter_kit.html@@@Installing the Predix UI CSS Starter Kit@@@The px-starter-kit-design library serves as a starting point for a new Predix UI CSS project...";
fil["63"]= "t_registering_for_a_user_account_on_predixio.html@@@Registering for a Predix Platform User Account@@@When you register for a Predix account, a Cloud Foundry user account is created and you are given a Cloud Foundry org and space...";
fil["64"]= "t_setting_up_predix_ui_developer_environment.html@@@Setting Up the Predix UI Developer Environment@@@Install Node.js and Bower...";
fil["65"]= "t_setting_up_the_predix_developer_environment.html@@@Setting Up the Predix Developer Environment@@@Set Predix platform user accounts, install Cloud Foundry CLI client, and configure proxy settings...";
fil["66"]= "t_tagging_a_deck.html@@@Tagging a Deck@@@Procedure for tagging a deck or card in the View service database...";
fil["67"]= "t_updating_oauth2_client.html@@@Updating the OAuth2 Client for Services@@@To use an OAuth2 client for secure access to your Predix Platform service instance from your application, you must update your OAuth2 client to add additional authorities or scopes that are specific to each service...";
fil["68"]= "t_using_a_predix_ui_css_library_in_a_web_application.html@@@Using a Predix UI CSS Library in a Web Application@@@The Predix UI CSS libraries ensure consistent design in a web applicaion that adapts the presentation to different devices...";
fil["69"]= "t_using_command_line_to_bind_an_application_to_a_view_service_instance.html@@@Using Command Line to Bind an Application to View Service@@@Procedure for using the Cloud Foundry CLI to bind an plication to View service...";
fil["70"]= "t_using_command_line_to_create_a_view_service_instance.html@@@Using Command Line to Create a View Service Instance@@@Procedure for using the Cloud Foundry CLI to create a View service instance...";
fil["71"]= "t_using_predix_ui_repository_in_a_web_application.html@@@Using a Predix UI Repository in a Web Application@@@Use the bower task runner utility to import the correct version of other required Predix UI repositories...";
fil["72"]= "t_using_uaac_to_create_oauth2_client_for_view_service.html@@@Using UAAC to Create an OAuth2 Client for View Service@@@Procedure using UAAC to manage user access to View service...";
fil["73"]= "t_using_uaac_to_update_oauth2_client_to_use_view_service.html@@@Using UAAC to Update the Oauth2 Client to Use View Service@@@Procedure for using UAAC to update user access to View service...";
fil["74"]= "t_usng_view_service.html@@@Using View Service@@@View service tasks...";
