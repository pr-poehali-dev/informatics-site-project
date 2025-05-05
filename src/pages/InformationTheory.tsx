
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const InformationTheory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Шапка */}
      <header className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-3xl font-bold text-primary-foreground mb-4 md:mb-0">
              Основы информатики
            </h1>
            <nav className="flex gap-4">
              <Button asChild variant="outline" className="bg-white/10 text-primary-foreground">
                <Link to="/">Главная</Link>
              </Button>
              <Button variant="outline" className="bg-white/10 text-primary-foreground">О курсе</Button>
              <Button variant="outline" className="bg-white/10 text-primary-foreground">Материалы</Button>
              <Button variant="outline" className="bg-white/10 text-primary-foreground">Контакты</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="container mx-auto px-4 py-10">
        <div className="mb-6">
          <Button asChild variant="ghost" className="flex items-center gap-2">
            <Link to="/">
              <ChevronLeft className="h-4 w-4" />
              Назад к темам
            </Link>
          </Button>
        </div>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-6">Информация и информационные процессы</h2>
          
          <div className="prose max-w-none mb-8">
            <p className="lead text-lg">
              Информация является одним из фундаментальных понятий в информатике. 
              Это сведения об окружающем мире, которые уменьшают степень неопределенности 
              и пополняют наши знания.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Основные виды информации:</h3>
            <ul>
              <li><strong>Текстовая</strong> – представляет собой последовательность символов</li>
              <li><strong>Числовая</strong> – представляет количественные данные</li>
              <li><strong>Графическая</strong> – представлена в виде изображений</li>
              <li><strong>Звуковая</strong> – представляет собой звуковые колебания</li>
              <li><strong>Видео</strong> – представляет собой последовательность изображений</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Свойства информации:</h3>
            <ul>
              <li><strong>Объективность</strong> – независимость от чьего-либо мнения</li>
              <li><strong>Достоверность</strong> – соответствие реальности</li>
              <li><strong>Полнота</strong> – достаточность для понимания и принятия решений</li>
              <li><strong>Актуальность</strong> – важность и своевременность информации</li>
              <li><strong>Ценность</strong> – полезность и значимость для получателя</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Информационные процессы</h3>
            <p className="mb-4">
              Информационные процессы — это процессы сбора, обработки, накопления, хранения, 
              поиска и распространения информации.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Сбор информации</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Процесс получения информации из различных источников: наблюдение, измерение, опрос и т.д.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Обработка информации</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Преобразование информации с целью получения новой информации, изменения формы представления или содержания.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Хранение информации</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Процесс поддержания информации в пригодном для использования состоянии с возможностью её последующего извлечения.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Передача информации</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Процесс распространения информации от источника к приёмнику по каналам связи.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="prose max-w-none mb-8">
            <h3 className="text-xl font-semibold mb-4">Измерение информации</h3>
            <p>
              Информация измеряется в битах. Бит — минимальная единица измерения информации, 
              которая может принимать значение 0 или 1.
            </p>
            
            <h4 className="mt-4 mb-2">Основные единицы измерения информации:</h4>
            <ul>
              <li>1 байт = 8 бит</li>
              <li>1 килобайт (КБ) = 1024 байт</li>
              <li>1 мегабайт (МБ) = 1024 КБ</li>
              <li>1 гигабайт (ГБ) = 1024 МБ</li>
              <li>1 терабайт (ТБ) = 1024 ГБ</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h3 className="text-2xl font-bold mb-4">Задачи для закрепления</h3>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="font-semibold mb-2">Задача 1:</h4>
              <p className="mb-4">
                Информационное сообщение объемом 1,5 Кбайт содержит 3072 символа. 
                Определите информационный вес одного символа в этом сообщении.
              </p>
              <Button>Смотреть решение</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="font-semibold mb-2">Задача 2:</h4>
              <p className="mb-4">
                Сколько бит информации несет сообщение о том, что произошло одно из четырех 
                равновероятных событий?
              </p>
              <Button>Смотреть решение</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">О проекте</h3>
              <p className="text-gray-300">
                Наш сайт предоставляет учебные материалы по информатике для учащихся и преподавателей.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Разделы</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-white">Теория</Link></li>
                <li><a href="#" className="hover:text-white">Практика</a></li>
                <li><a href="#" className="hover:text-white">Тесты</a></li>
                <li><a href="#" className="hover:text-white">Глоссарий</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Ресурсы</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Учебники</a></li>
                <li><a href="#" className="hover:text-white">Видеоуроки</a></li>
                <li><a href="#" className="hover:text-white">Презентации</a></li>
                <li><a href="#" className="hover:text-white">Ссылки</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p className="text-gray-300 mb-2">Email: info@informatika.ru</p>
              <p className="text-gray-300">Телефон: +7 (123) 456-78-90</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
            <p>© 2025 Основы информатики. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InformationTheory;
