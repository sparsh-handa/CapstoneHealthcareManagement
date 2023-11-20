import { Component, OnInit } from '@angular/core';
import Peer from 'peerjs';
import { MaterialModule } from 'src/material/material.module';
import { FormsModule, NgModel } from '@angular/forms';
 
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
 
  private peer: Peer;
  peerIdShare: any;
  peerId: any;
  private lazyStream: any;
  currentPeer: any;
  private peerList: Array<any> = [];
 
  constructor() {
    this.peer = new Peer();
  }
  ngOnInit(): void {
    this.getPeerId();
  }
 
  private getPeerId = () => {
    //Generate unique Peer Id for establishing connection
    this.peer.on('open', (id) => {
      this.peerId = id;
      // this.createURLToConnect(id);
    });
 
    // Peer event to accept incoming calls
    this.peer.on('call', (call) => {
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      }).then((stream) => {
        this.lazyStream = stream;
 
        call.answer(stream);
        call.on('stream', (remoteStream) => {
          if (!this.peerList.includes(call.peer)) {
            this.streamRemoteVideo(remoteStream);
            this.currentPeer = call.peerConnection;
            this.peerList.push(call.peer);
          }
        });
 
      }).catch(err => {
        console.log(err + 'Unable to get media');
      });
    });
  }
  connectWithPeer(): void {
    this.callPeer(this.peerIdShare);
  }
  private callPeer(id: string): void {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then((stream) => {
      this.lazyStream = stream;
 
      const call = this.peer.call(id, stream);
      call.on('stream', (remoteStream) => {
        if (!this.peerList.includes(call.peer)) {
          this.streamRemoteVideo(remoteStream);
          this.currentPeer = call.peerConnection;
          this.peerList.push(call.peer);
        }
      });
    }).catch(err => {
      console.log(err + 'Unable to connect');
    });
  }
  private streamRemoteVideo(stream: any) {
    const video = document.createElement('video');
    video.classList.add('video');
    video.srcObject = stream;
    video.play();
 
    // document./getElementById('remote-video').append(video);
    const remoteVideo = document.getElementById('remote-video');
    if (remoteVideo) {
      remoteVideo.append(video);
    }
  }
 
  screenShare():void {
    this.shareScreen();
  }
 
    private shareScreen() :void {
      // @ts-ignore
      navigator.mediaDevices.getDisplayMedia({
        video: {
          cursor: "always"
        } as MediaTrackConstraints,
        audio: {
          echoCancellation: true,
          noiseSuppression: true
        }
      }).then(stream => {
        const videoTrack = stream.getVideoTracks()[0];
        videoTrack.onended = () => {
          this.stopScreenShare();
        };
 
        const sender = this.currentPeer.getSenders().find((s: RTCRtpSender) => s.track?.kind === videoTrack.kind);
        sender.replaceTrack(videoTrack);
      }).catch(err => {
        console.log('Unable to get display media ' + err);
      });
    }
 
    private stopScreenShare() {
     
      const videoTrack = this.lazyStream.getVideoTracks()[0];
      const sender = this.currentPeer.getSenders().find((s: RTCRtpSender) => s.track?.kind === videoTrack.kind);
      sender.replaceTrack(videoTrack);
    }
 
  }
 