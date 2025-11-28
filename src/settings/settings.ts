export class DiscordRPCSettings {
  showVaultName: boolean = true;
  showCurrentFileName: boolean = true;
  showConnectionTimer: boolean = false;
  showPopups: boolean = true;
  customVaultName: string = "";
  showFileExtension: boolean = false;
  useLoadedTime: boolean = false;
  connectOnStart: boolean = true;
  autoHideStatusBar: boolean = true;
  privacyMode: boolean = false;
  enableInactivityDetection: boolean = false;
  inactivityTimeout: number = 5; // minutes
  inactivityBehavior: InactivityBehavior = InactivityBehavior.ClearStatus;
  customInactiveText: string = "Inactive...";
}

export enum PluginState {
  connected,
  connecting,
  disconnected,
}

export enum InactivityBehavior {
  ClearStatus = "clear",
  ShowInactive = "show-inactive",
}
