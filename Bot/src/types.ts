import {
  APIInteractionGuildMember,
  Channel,
  Client,
  Collection,
  CommandInteraction,
  Guild,
  GuildMember,
  Interaction,
  Message,
  Options,
  ReplyOptions,
  Snowflake,
  TextBasedChannel,
  TextChannel,
  User,
} from "discord.js";
import { QuickDB } from "quick.db";
import i18nJson from "./languages/en";

interface Command {
  execute: (
    client?: CustomClient,
    interaction?: Interaction | CommandInteraction,
    message?: Message,
    guild?: Guild,
    member?: GuildMember | APIInteractionGuildMember,
    user?: User,
    channel?: TextChannel | TextBasedChannel,
    arg?: String[]
  ) => Promise<ReplyOptions | String | Message>;
  data: {
    default_member_permissions?: string;
    description: String;
    name: string;
    options: Options;
  };
}

export interface CustomClient extends Client {
  voiceTimes: Collection<string, number>;
  i8: string;
  db: QuickDB;
  commands: Collection<string, Command>;
  cmdsec: { [key: string]: string[] }; // Correct type for cmdsec
  i18n: { [key: string]: typeof i18nJson };
  deletedMessages: Collection<Snowflake, Snowflake[]>;
  getLanguage: (guildId: string) => Promise<string>;
}

export interface commandData {
  disabledChannels: Snowflake[];
  enabledChannels: Snowflake[];
  disabledRoles: Snowflake[];
  enabledRoles: Snowflake[];
  // skipRoles: string[];
  deleteCommandMsg: Boolean;
  deleteReply: Boolean;
  deleteWithInvocation: Boolean;
  enabled: Boolean;
}
