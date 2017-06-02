/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import {GlobalService} from "../global.service";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    
   constructor(private global:GlobalService) {}
    
  sortBase="kbid";
  directionObj={};
  direction="down";
  
  
  
  
 
  changeSortBase(base):void{
      console.log(base);
//      debugger;
  this.sortBase=base;
  if(this.directionObj[base]=="up" || this.directionObj[base]==undefined){
  this.directionObj[base]="down";
  }
  else{
  this.directionObj[base]="up";
  }
  //alert(base+" : "+this.directionObj[base]);
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    currentPage=1;
    users=[{
	"kbid": 20000001,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Disable ESXi Shell unless needed for diagnostics or troubleshooting: disable-esxi-shell",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000002,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Prevent unauthorized removal, connection and modification of devices: prevent-device-interaction-connect",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000003,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Limit informational messages from the VM to the VMX file: limit-setinfo-size",
	"type": "SH",
	"affObjectsCount": 165
}, {
	"kbid": 20000004,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Network",
	"riskRating": 4,
	"title": "Ensure that the Forged Transmits policy is set to reject: reject-forged-transmit",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000005,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Network",
	"riskRating": 4,
	"title": "Ensure that the Forged Transmits policy is set to reject: reject-forged-transmit-dvportgroup",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000006,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-getcreds",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000007,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Explicitly disable copy/paste operations: disable-console-paste",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000008,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Disable virtual disk shrinking: disable-disk-shrinking-shrink",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000009,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Control access to VMs through VMsafe CPU/memory APIs: verify-vmsafe-cpumem-enable",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000010,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Avoid using independent nonpersistent disks: disable-independent-nonpersistent",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000011,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Prevent unauthorized removal, connection and modification of devices: prevent-device-interaction-edit",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000012,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Control access to VMs through VMsafe CPU/memory APIs: verify-vmsafe-cpumem-agentaddress",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000013,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 2,
	"title": "Disable DCUI to prevent local administrative control: disable-dcui",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000014,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Explicitly disable copy/paste operations: disable-console-copy",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000015,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Prevent virtual machines from taking over resources: control-resource-usage",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000016,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Network",
	"riskRating": 4,
	"title": "Ensure that port groups are not configured to VLAN 4095 except for Virtual Guest Tagging (VGT): no-vgt-vlan-4095",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000017,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Disable VM-to-VM communication through VMCI: disable-intervm-vmci",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000018,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Disconnect unauthorized devices: disconnect-devices-serial",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000019,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Disable virtual disk shrinking: disable-disk-shrinking-wiper",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000020,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-unitypush",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000021,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Configure NTP time synchronization: config-ntp",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000022,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Network",
	"riskRating": 4,
	"title": "Ensure that the MAC Address Change policy is set to reject: reject-mac-changes",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000023,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Limit sharing of console connections: limit-console-connections-one",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000024,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Do not send host information to guests: restrict-host-info",
	"type": "SH",
	"affObjectsCount": 165
}, {
	"kbid": 20000025,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-biosbbs",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000026,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Enable bidirectional CHAP, also known as Mutual CHAP, authentication for iSCSI traffic: enable-chap-auth",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000027,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Control access to VMs through VMsafe CPU/memory APIs: verify-vmsafe-cpumem-agentport",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000028,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-autologon",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000029,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Disconnect unauthorized devices: disconnect-devices-usb",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000030,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-memsfss",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000031,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Disconnect unauthorized devices: disconnect-devices-ide",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000032,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Network",
	"riskRating": 4,
	"title": "Ensure that the Promiscuous Mode policy is set to reject: reject-promiscuous-mode",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000033,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Network",
	"riskRating": 4,
	"title": "Ensure that the Promiscuous Mode policy is set to reject: reject-promiscuous-mode-dvportgroup",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000034,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Disconnect unauthorized devices: disconnect-devices-parallel",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000035,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Disable SSH: disable-ssh",
	"type": "SH",
	"affObjectsCount": 3
}, {
	"kbid": 20000036,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Enable lockdown mode to restrict remote access: enable-lockdown-mode",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000037,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-launchmenu",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000038,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Disconnect unauthorized devices: disconnect-devices-floppy",
	"type": "SH",
	"affObjectsCount": 137
}, {
	"kbid": 20000039,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Disable tools auto install: disable-autoinstall",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000040,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Limit VM logging: limit-log-size",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000041,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Limit VM logging: limit-log-number",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000042,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable VIX messages from the VM: disable-vix-messages",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000043,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-versionset",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000044,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-versionget",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000045,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-unity-windowcontents",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000046,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-unity-unityactive",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000047,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-unity-taskbar",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000048,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-unity-interlock",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000049,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-unity",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000050,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-trayicon",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000051,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-trashfolderstate",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000052,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-toporequest",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000053,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-shellaction",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000054,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable certain unexposed features: disable-unexposed-features-protocolhandler",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000055,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable VM Monitor Control: disable-monitor-control",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000056,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Network",
	"riskRating": 4,
	"title": "Ensure that the MAC Address Change policy is set to reject: reject-mac-change-dvportgroup",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000057,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Explicitly disable copy/paste operations: disable-console-dnd",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000058,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Explicitly disable copy/paste operations: disable-console-gui-options",
	"type": "SH",
	"affObjectsCount": 152
}, {
	"kbid": 20000059,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable HGFS file transfers: disable-hgfs",
	"type": "SH",
	"affObjectsCount": 165
}, {
	"kbid": 20000060,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Disable VM logging: disable-logging",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000061,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Disable 3D features on Server and desktop virtual machines: disable-non-essential-3D-features",
	"type": "SH",
	"affObjectsCount": 165
}, {
	"kbid": 20000062,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Disable all but VGA mode on virtual machines: enable-VGA-Only-Mode",
	"type": "SH",
	"affObjectsCount": 165
}, {
	"kbid": 20000063,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 2,
	"title": "Limit sharing of console connections: limit-console-connections-two",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000064,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Control access to VM console via VNC protocol: minimize-console-VNC-use",
	"type": "SH",
	"affObjectsCount": 165
}, {
	"kbid": 20000065,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Control access to VMs through the dvfilter network APIs: verify-network-filter",
	"type": "SH",
	"affObjectsCount": 115
}, {
	"kbid": 20000066,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Use Active Directory for local user authentication: enable-ad-auth",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000067,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Configure remote logging for ESXi hosts: enable-remote-syslog",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000068,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Set a timeout to automatically terminate idle ESXi Shell and SSH sessions: set-shell-interactive-timeout",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000069,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Set a timeout to limit how long the ESXi Shell and SSH services are allowed to run: set-shell-timeout",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000070,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Prevent unintended use of dvfilter network APIs: verify-dvfilter-bind",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000071,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Network",
	"riskRating": 3,
	"title": "Verify that the autoexpand option for VDS dvPortgroups is disabled: disable-dvportgroup-autoexpand",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000072,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Network",
	"riskRating": 4,
	"title": "Enable BPDU filter on the ESXi host to prevent being locked out of physical switch ports with Portfast and BPDU Guard enabled: enable-bpdu-filter",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000073,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Network",
	"riskRating": 4,
	"title": "Disable VDS network healthcheck if you are not actively using it: limit-network-healthcheck",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000074,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "vCenter",
	"riskRating": 3,
	"title": "Ensure SSL for Network File copy (NFC) is enabled: verify-nfc-ssl",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000075,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "vCenter",
	"riskRating": 4,
	"title": "Ensure that vpxuser auto-password change meets policy: vpxuser-password-age",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000076,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Set DCUI.Access to allow trusted users to  override lockdown mode: set-dcui-access",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000077,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Configure the ESXi host firewall to restrict access to services running on the host",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000078,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "VM",
	"riskRating": 3,
	"title": "Audit all uses of PCI or PCIe passthrough functionality: verify-PCI-Passthrough",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000100,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Keep ESXi system properly patched: ESXi.apply-patches",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000104,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Configure persistent logging for all ESXi host: ESXi.config-persistent-logs",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000106,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Disable Managed Object Browser (MOB): ESXi.disable-mob",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000107,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Disable TLS 1.0 and 1.1 on ESXi Hosts if necessary: ESXi.Disable-oldtls-protocols",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000113,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 2,
	"title": "Enable Strict lockdown mode to restrict access: ESXi.enable-strict-lockdown-mode",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000115,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Set the time after which a locked account is automatically unlocked: ESXi.set-account-auto-unlock-time",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000116,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Set the count of maximum failed login attempts before the account is locked out: ESXi.set-account-lockout",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000118,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Audit DCUI timeout value: ESXi.set-dcui-timeout",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000119,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Establish a password policy for password complexity: ESXi.set-password-policies",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000122,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Ensure default setting for intra-VM TPS is correct: ESXi.TransparentPageSharing-intra-enabled",
	"type": "SH",
	"affObjectsCount": 4
}, {
	"kbid": 20000123,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Compute",
	"riskRating": 4,
	"title": "Verify Image Profile and VIB Acceptance Levels: ESXi.verify-acceptance-level-supported",
	"type": "SH",
	"affObjectsCount": 0
}, {
	"kbid": 20000166,
	"affects": "Security",
	"annotation": null,
	"annotationModified": null,
	"appliesTo": "Network",
	"riskRating": 4,
	"title": "Restrict port-level configuration overrides on VDS : vNetwork.restrict-port-level-overrides",
	"type": "SH",
	"affObjectsCount": 0
}];

}
