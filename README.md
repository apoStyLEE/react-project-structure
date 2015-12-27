# react-project-structure
React Project Structure with Gulp, Babel and Browserify

## Kullanım

Sisteminizde nodejs nin kurulu olduğundan emin olun. Terminalden projenizin olduğu klasöre gidin.

```sh
npm install
```

Komutunu çalıştırın. Bu komut package.json içinde ki ilgili bağımlılıkları node_modules klasörüne indirecek.

```sh
gulp
```

gulp komutu ile gulpfile.js içinde ki akış gerçekleştiriliyor. 
Bu akışta jsx uzantılı dosyaları babel kullanılarak derliyoruz (compile) ve app.js adında tek bir javascript dosyasına yazıyorız.
Jsx dosyalarında yaptığınız her değişiklik sonrasında otomatik olarak derleme süreci tekrarlanır ve hata olduğunda terminalde ilgili hatayı açık bir şekilde görebilirsiniz.
Varsayılan olarak app.js sıkıştırılmamış olarak oluşturulur. 

```sh
gulp --env production
```

Environment parametresini production geçerek app.js yi sıkıştırabiliriz.
