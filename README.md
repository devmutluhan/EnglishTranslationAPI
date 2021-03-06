# EnglishTranslationAPI

## Proje Detayları
- Uygulamamız kullanıcıdan aldığı ingilizce ve türkçe kelimelerle, kullanıcının kelime hazinesini geliştirmeyi amaçlar.
- Proje databasesini __SQL Server__ oluşturur. SQL Server bağlantısı __Dapper__ ile gerçekleşir.
- __Katmanlı Mimari__ ile yazılmıştır.
- __SOLID__ ilkelerine bağlı kalınmıştır.
- __Dependency Injection__ ile database verilerine __API__ uygulamamız ulaşır.
- __CRUD__ işlemleri yapılabilen bir uygulamadır.
- Backend için __C#__ dili, frontend için __JavaScript__ dili kullanılmıştır.
- Uygulamamızda 2 sayfa bulunmaktadır. Bu sayfalar arasında buton ile geçiş sağlanır.

## Vocable Page
- Bu sayfada database üzerine kelime eklemesi yapılır.
- Kelimeler databaseden alınıp bu sayfada listelenir.
- Kelimeler üzerinde değişiklik veya kelimeleri kaldırma gibi seçenekler yine bu sayfada gerçekleşir.
- Sayfa resmi:

![vocablePage](https://github.com/devmutluhan/EnglishTranslationAPI/blob/main/Images/VocablePage.png)

## Quiz Page
- Bu sayfada ise database de tutulan kelimelerden random birisi seçilir ve ekrana getirilir.
- Alt tarafında türkçesi istenir.
- Cevaba göre doğru veya yanlış geri dönüt verilir.
- Sayfa resmi:

![quizPage](https://github.com/devmutluhan/EnglishTranslationAPI/blob/main/Images/QuizPage.png)
