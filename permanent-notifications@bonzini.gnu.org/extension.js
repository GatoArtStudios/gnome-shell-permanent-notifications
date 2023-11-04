/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */

import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";
import * as MessageTray from "resource:///org/gnome/shell/ui/messageTray.js";

export default class PermanentNotificationExtension extends Extension {
    constructor(metadata) {
        super(metadata);

        let tray = MessageTray.MessageTray.prototype;
        tray.oldUpdateNotificationTimeout = tray._updateNotificationTimeout;
    }

    enable() {
        MessageTray.MessageTray.prototype._updateNotificationTimeout = function(timeout) {
            this._notificationTimeoutId = timeout ? 1 : 0;
        };
    }

    disable() {
        let tray = MessageTray.MessageTray.prototype;
        tray._updateNotificationTimeout = tray.oldUpdateNotificationTimeout;
    }
}
