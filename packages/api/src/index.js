/**
 * UGC Guard API
 * API for UGC Guard. A tool to help you manage reports on user generated content.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AIEnrichedAnswer from './model/AIEnrichedAnswer';
import AIEvaluation from './model/AIEvaluation';
import AIUsage from './model/AIUsage';
import Action from './model/Action';
import AiModel from './model/AiModel';
import AllContentResponse from './model/AllContentResponse';
import AnonymousPerson from './model/AnonymousPerson';
import BodyCreateMagicReport from './model/BodyCreateMagicReport';
import Channel from './model/Channel';
import ChannelUser from './model/ChannelUser';
import ComparedModuleState from './model/ComparedModuleState';
import Content from './model/Content';
import ContentCreate from './model/ContentCreate';
import ContentPublic from './model/ContentPublic';
import ContentType from './model/ContentType';
import File from './model/File';
import HTTPValidationError from './model/HTTPValidationError';
import MailTemplate from './model/MailTemplate';
import MailTemplateBase from './model/MailTemplateBase';
import MailTemplateType from './model/MailTemplateType';
import MailTemplatesWithDefaults from './model/MailTemplatesWithDefaults';
import MainContentSender from './model/MainContentSender';
import Module from './model/Module';
import ModuleDB from './model/ModuleDB';
import ModuleStats from './model/ModuleStats';
import OrgWithMembershipState from './model/OrgWithMembershipState';
import Organization from './model/Organization';
import OrganizationGroupings from './model/OrganizationGroupings';
import PaginatedResultChannel from './model/PaginatedResultChannel';
import PaginatedResultMailTemplate from './model/PaginatedResultMailTemplate';
import PaginatedResultModule from './model/PaginatedResultModule';
import PaginatedResultReportDB from './model/PaginatedResultReportDB';
import PaginatedResultReportWithReportersAndEvaluations from './model/PaginatedResultReportWithReportersAndEvaluations';
import PaginatedResultType from './model/PaginatedResultType';
import PaginatedResultUserBase from './model/PaginatedResultUserBase';
import PaginatedResultUserWithMembershipState from './model/PaginatedResultUserWithMembershipState';
import Person from './model/Person';
import PersonDB from './model/PersonDB';
import Report from './model/Report';
import ReportCategory from './model/ReportCategory';
import ReportCreate from './model/ReportCreate';
import ReportDB from './model/ReportDB';
import ReportState from './model/ReportState';
import ReportWithReportersAndEvaluations from './model/ReportWithReportersAndEvaluations';
import Reporter from './model/Reporter';
import ReportersWithPerson from './model/ReportersWithPerson';
import SendMailSettings from './model/SendMailSettings';
import Type from './model/Type';
import UserBase from './model/UserBase';
import UserOrganizationMembershipState from './model/UserOrganizationMembershipState';
import UserWithMembershipState from './model/UserWithMembershipState';
import ValidationError from './model/ValidationError';
import ValidationErrorLocInner from './model/ValidationErrorLocInner';
import ActionsApi from './api/ActionsApi';
import AiApi from './api/AiApi';
import ContentApi from './api/ContentApi';
import DefaultApi from './api/DefaultApi';
import FilesApi from './api/FilesApi';
import MailTemplatesApi from './api/MailTemplatesApi';
import ModulesApi from './api/ModulesApi';
import OrganizationsApi from './api/OrganizationsApi';
import PersonsApi from './api/PersonsApi';
import ReportsApi from './api/ReportsApi';
import StatsApi from './api/StatsApi';
import TypesApi from './api/TypesApi';
import UsersApi from './api/UsersApi';


/**
* API for UGC Guard. A tool to help you manage reports on user generated content..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var UgcGuardJavascriptApi = require('index'); // See note below*.
* var xxxSvc = new UgcGuardJavascriptApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new UgcGuardJavascriptApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new UgcGuardJavascriptApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new UgcGuardJavascriptApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AIEnrichedAnswer model constructor.
     * @property {module:model/AIEnrichedAnswer}
     */
    AIEnrichedAnswer,

    /**
     * The AIEvaluation model constructor.
     * @property {module:model/AIEvaluation}
     */
    AIEvaluation,

    /**
     * The AIUsage model constructor.
     * @property {module:model/AIUsage}
     */
    AIUsage,

    /**
     * The Action model constructor.
     * @property {module:model/Action}
     */
    Action,

    /**
     * The AiModel model constructor.
     * @property {module:model/AiModel}
     */
    AiModel,

    /**
     * The AllContentResponse model constructor.
     * @property {module:model/AllContentResponse}
     */
    AllContentResponse,

    /**
     * The AnonymousPerson model constructor.
     * @property {module:model/AnonymousPerson}
     */
    AnonymousPerson,

    /**
     * The BodyCreateMagicReport model constructor.
     * @property {module:model/BodyCreateMagicReport}
     */
    BodyCreateMagicReport,

    /**
     * The Channel model constructor.
     * @property {module:model/Channel}
     */
    Channel,

    /**
     * The ChannelUser model constructor.
     * @property {module:model/ChannelUser}
     */
    ChannelUser,

    /**
     * The ComparedModuleState model constructor.
     * @property {module:model/ComparedModuleState}
     */
    ComparedModuleState,

    /**
     * The Content model constructor.
     * @property {module:model/Content}
     */
    Content,

    /**
     * The ContentCreate model constructor.
     * @property {module:model/ContentCreate}
     */
    ContentCreate,

    /**
     * The ContentPublic model constructor.
     * @property {module:model/ContentPublic}
     */
    ContentPublic,

    /**
     * The ContentType model constructor.
     * @property {module:model/ContentType}
     */
    ContentType,

    /**
     * The File model constructor.
     * @property {module:model/File}
     */
    File,

    /**
     * The HTTPValidationError model constructor.
     * @property {module:model/HTTPValidationError}
     */
    HTTPValidationError,

    /**
     * The MailTemplate model constructor.
     * @property {module:model/MailTemplate}
     */
    MailTemplate,

    /**
     * The MailTemplateBase model constructor.
     * @property {module:model/MailTemplateBase}
     */
    MailTemplateBase,

    /**
     * The MailTemplateType model constructor.
     * @property {module:model/MailTemplateType}
     */
    MailTemplateType,

    /**
     * The MailTemplatesWithDefaults model constructor.
     * @property {module:model/MailTemplatesWithDefaults}
     */
    MailTemplatesWithDefaults,

    /**
     * The MainContentSender model constructor.
     * @property {module:model/MainContentSender}
     */
    MainContentSender,

    /**
     * The Module model constructor.
     * @property {module:model/Module}
     */
    Module,

    /**
     * The ModuleDB model constructor.
     * @property {module:model/ModuleDB}
     */
    ModuleDB,

    /**
     * The ModuleStats model constructor.
     * @property {module:model/ModuleStats}
     */
    ModuleStats,

    /**
     * The OrgWithMembershipState model constructor.
     * @property {module:model/OrgWithMembershipState}
     */
    OrgWithMembershipState,

    /**
     * The Organization model constructor.
     * @property {module:model/Organization}
     */
    Organization,

    /**
     * The OrganizationGroupings model constructor.
     * @property {module:model/OrganizationGroupings}
     */
    OrganizationGroupings,

    /**
     * The PaginatedResultChannel model constructor.
     * @property {module:model/PaginatedResultChannel}
     */
    PaginatedResultChannel,

    /**
     * The PaginatedResultMailTemplate model constructor.
     * @property {module:model/PaginatedResultMailTemplate}
     */
    PaginatedResultMailTemplate,

    /**
     * The PaginatedResultModule model constructor.
     * @property {module:model/PaginatedResultModule}
     */
    PaginatedResultModule,

    /**
     * The PaginatedResultReportDB model constructor.
     * @property {module:model/PaginatedResultReportDB}
     */
    PaginatedResultReportDB,

    /**
     * The PaginatedResultReportWithReportersAndEvaluations model constructor.
     * @property {module:model/PaginatedResultReportWithReportersAndEvaluations}
     */
    PaginatedResultReportWithReportersAndEvaluations,

    /**
     * The PaginatedResultType model constructor.
     * @property {module:model/PaginatedResultType}
     */
    PaginatedResultType,

    /**
     * The PaginatedResultUserBase model constructor.
     * @property {module:model/PaginatedResultUserBase}
     */
    PaginatedResultUserBase,

    /**
     * The PaginatedResultUserWithMembershipState model constructor.
     * @property {module:model/PaginatedResultUserWithMembershipState}
     */
    PaginatedResultUserWithMembershipState,

    /**
     * The Person model constructor.
     * @property {module:model/Person}
     */
    Person,

    /**
     * The PersonDB model constructor.
     * @property {module:model/PersonDB}
     */
    PersonDB,

    /**
     * The Report model constructor.
     * @property {module:model/Report}
     */
    Report,

    /**
     * The ReportCategory model constructor.
     * @property {module:model/ReportCategory}
     */
    ReportCategory,

    /**
     * The ReportCreate model constructor.
     * @property {module:model/ReportCreate}
     */
    ReportCreate,

    /**
     * The ReportDB model constructor.
     * @property {module:model/ReportDB}
     */
    ReportDB,

    /**
     * The ReportState model constructor.
     * @property {module:model/ReportState}
     */
    ReportState,

    /**
     * The ReportWithReportersAndEvaluations model constructor.
     * @property {module:model/ReportWithReportersAndEvaluations}
     */
    ReportWithReportersAndEvaluations,

    /**
     * The Reporter model constructor.
     * @property {module:model/Reporter}
     */
    Reporter,

    /**
     * The ReportersWithPerson model constructor.
     * @property {module:model/ReportersWithPerson}
     */
    ReportersWithPerson,

    /**
     * The SendMailSettings model constructor.
     * @property {module:model/SendMailSettings}
     */
    SendMailSettings,

    /**
     * The Type model constructor.
     * @property {module:model/Type}
     */
    Type,

    /**
     * The UserBase model constructor.
     * @property {module:model/UserBase}
     */
    UserBase,

    /**
     * The UserOrganizationMembershipState model constructor.
     * @property {module:model/UserOrganizationMembershipState}
     */
    UserOrganizationMembershipState,

    /**
     * The UserWithMembershipState model constructor.
     * @property {module:model/UserWithMembershipState}
     */
    UserWithMembershipState,

    /**
     * The ValidationError model constructor.
     * @property {module:model/ValidationError}
     */
    ValidationError,

    /**
     * The ValidationErrorLocInner model constructor.
     * @property {module:model/ValidationErrorLocInner}
     */
    ValidationErrorLocInner,

    /**
    * The ActionsApi service constructor.
    * @property {module:api/ActionsApi}
    */
    ActionsApi,

    /**
    * The AiApi service constructor.
    * @property {module:api/AiApi}
    */
    AiApi,

    /**
    * The ContentApi service constructor.
    * @property {module:api/ContentApi}
    */
    ContentApi,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi,

    /**
    * The FilesApi service constructor.
    * @property {module:api/FilesApi}
    */
    FilesApi,

    /**
    * The MailTemplatesApi service constructor.
    * @property {module:api/MailTemplatesApi}
    */
    MailTemplatesApi,

    /**
    * The ModulesApi service constructor.
    * @property {module:api/ModulesApi}
    */
    ModulesApi,

    /**
    * The OrganizationsApi service constructor.
    * @property {module:api/OrganizationsApi}
    */
    OrganizationsApi,

    /**
    * The PersonsApi service constructor.
    * @property {module:api/PersonsApi}
    */
    PersonsApi,

    /**
    * The ReportsApi service constructor.
    * @property {module:api/ReportsApi}
    */
    ReportsApi,

    /**
    * The StatsApi service constructor.
    * @property {module:api/StatsApi}
    */
    StatsApi,

    /**
    * The TypesApi service constructor.
    * @property {module:api/TypesApi}
    */
    TypesApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
