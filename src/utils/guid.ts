export class UUID{
    static uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Phaser.Math.Between(0, 1024) * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); // this is probably incredibely wrong but we don't need super good GUIDs anyway
          return v.toString(16);
        });
      }
}