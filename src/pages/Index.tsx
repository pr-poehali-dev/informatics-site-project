
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const topics = [
    {
      title: "Информация и информационные процессы",
      description: "Информационные ресурсы, системы, технологии и процессы",
      icon: "📊"
    },
    {
      title: "Математические основы информатики",
      description: "Системы счисления, логические основы, моделирование",
      icon: "🧮"
    },
    {
      title: "Аппаратное обеспечение",
      description: "Компьютер, его устройство и программное обеспечение",
      icon: "💻"
    },
    {
      title: "Алгоритмизация и программирование",
      description: "Алгоритмы, языки программирования и структуры данных",
      icon: "🔄"
    },
    {
      title: "Информационные технологии",
      description: "Обработка текста, графики, баз данных и телекоммуникация",
      icon: "🌐"
    },
    {
      title: "Компьютерные сети и интернет",
      description: "Сетевые технологии, протоколы и безопасность",
      icon: "🔒"
    }
  ];

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
              <Button variant="outline" className="bg-white/10 text-primary-foreground">Главная</Button>
              <Button variant="outline" className="bg-white/10 text-primary-foreground">О курсе</Button>
              <Button variant="outline" className="bg-white/10 text-primary-foreground">Материалы</Button>
              <Button variant="outline" className="bg-white/10 text-primary-foreground">Контакты</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="container mx-auto px-4 py-10">
        <section className="mb-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Добро пожаловать на курс информатики</h2>
            <p className="text-lg text-gray-600">
              Изучайте основы информатики и информационных технологий 
              с помощью наших интерактивных материалов, упражнений и тестов.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{topic.icon}</span>
                    <CardTitle>{topic.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{topic.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Подробнее</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 p-8 rounded-xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Почему стоит изучать информатику?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Развитие логического и алгоритмического мышления</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Понимание принципов работы современных технологий</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Востребованные навыки на рынке труда</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Основа для изучения программирования и других IT-дисциплин</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1650&q=80" 
                alt="Изучение информатики" 
                className="rounded-lg max-w-full h-auto shadow-md"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Последние материалы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Основы кибербезопасности</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Узнайте о защите данных и безопасном поведении в сети</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Читать</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Алгоритмы сортировки</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Обзор популярных алгоритмов сортировки и их сравнение</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Читать</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Облачные технологии</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Введение в облачные сервисы и их применение</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Читать</Button>
              </CardFooter>
            </Card>
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
                <li><a href="#" className="hover:text-white">Теория</a></li>
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

export default Index;
