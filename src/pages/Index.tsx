import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'safety', label: 'Безопасность', icon: 'Shield' },
    { id: 'communication', label: 'Коммуникации', icon: 'MessageSquare' },
    { id: 'etiquette', label: 'Этикет', icon: 'UserCheck' },
    { id: 'contact', label: 'Контакты', icon: 'Mail' }
  ];

  const safetyTips = [
    {
      icon: 'Lock',
      title: 'Надёжные пароли',
      description: 'Используйте сложные уникальные пароли для каждого сервиса. Включайте буквы, цифры и символы.'
    },
    {
      icon: 'Eye',
      title: 'Приватность данных',
      description: 'Не делитесь личной информацией с незнакомцами. Проверяйте настройки приватности в соцсетях.'
    },
    {
      icon: 'AlertTriangle',
      title: 'Распознавание угроз',
      description: 'Будьте внимательны к фишинговым письмам и подозрительным ссылкам. Проверяйте отправителя.'
    },
    {
      icon: 'Download',
      title: 'Безопасные загрузки',
      description: 'Скачивайте файлы только с проверенных источников. Используйте антивирус.'
    }
  ];

  const communicationTools = [
    {
      icon: 'MessageCircle',
      title: 'Мессенджеры',
      description: 'Telegram, WhatsApp, Viber - современные средства быстрой связи',
      features: ['Групповые чаты', 'Обмен файлами', 'Видеозвонки']
    },
    {
      icon: 'Mail',
      title: 'Электронная почта',
      description: 'Gmail, Yandex, Mail.ru - для официальной переписки',
      features: ['Вложения', 'Форматирование', 'Папки и фильтры']
    },
    {
      icon: 'Video',
      title: 'Видеоконференции',
      description: 'Zoom, Google Meet, Discord - для дистанционного обучения',
      features: ['Демонстрация экрана', 'Чат', 'Запись встреч']
    },
    {
      icon: 'Users',
      title: 'Социальные сети',
      description: 'VK, Одноклассники - для общения и обмена информацией',
      features: ['Группы', 'Сообщества', 'Публикации']
    }
  ];

  const etiquetteRules = [
    {
      rule: 'Уважайте собеседника',
      details: 'Будьте вежливы, избегайте грубости и оскорблений даже в споре.'
    },
    {
      rule: 'Пишите грамотно',
      details: 'Соблюдайте правила русского языка, используйте знаки препинания.'
    },
    {
      rule: 'Не злоупотребляйте КАПСЛОКОМ',
      details: 'Текст заглавными буквами воспринимается как крик.'
    },
    {
      rule: 'Подумайте перед отправкой',
      details: 'Перечитайте сообщение. То, что написано в интернете, остаётся навсегда.'
    },
    {
      rule: 'Соблюдайте конфиденциальность',
      details: 'Не пересылайте личную переписку без разрешения.'
    },
    {
      rule: 'Используйте эмодзи разумно',
      details: 'Смайлики помогают передать эмоции, но не перебарщивайте.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Laptop" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Информатика</h1>
                <p className="text-xs text-slate-600">Интернет-коммуникации и безопасность</p>
              </div>
            </div>
            <div className="hidden md:flex gap-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className="gap-2"
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="md:hidden flex gap-2 overflow-x-auto mt-4 pb-2">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'outline'}
                onClick={() => setActiveSection(item.id)}
                size="sm"
                className="gap-2 whitespace-nowrap"
              >
                <Icon name={item.icon as any} size={16} />
                {item.label}
              </Button>
            ))}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="space-y-16 animate-fade-in">
            <section className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-6 px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold animate-scale-in">
                Образовательный курс
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Безопасность и этикет в цифровом мире
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Научитесь грамотно и безопасно использовать интернет-сервисы, защищать свои данные и соблюдать правила сетевого этикета
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={() => setActiveSection('safety')} className="gap-2 text-lg px-8">
                  <Icon name="Shield" size={20} />
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection('contact')} className="gap-2 text-lg px-8">
                  <Icon name="Mail" size={20} />
                  Связаться
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'Shield', title: 'Безопасность', description: 'Защита персональных данных и паролей', color: 'from-blue-500 to-cyan-500' },
                { icon: 'MessageSquare', title: 'Коммуникации', description: 'Современные сервисы для общения', color: 'from-purple-500 to-pink-500' },
                { icon: 'UserCheck', title: 'Этикет', description: 'Правила поведения в сети', color: 'from-green-500 to-emerald-500' }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer" onClick={() => setActiveSection(item.title === 'Безопасность' ? 'safety' : item.title === 'Коммуникации' ? 'communication' : 'etiquette')}>
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <Icon name={item.icon as any} size={28} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </section>
          </div>
        )}

        {activeSection === 'safety' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Безопасность в Интернете
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Основные правила и стратегии для защиты ваших данных в цифровой среде
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {safetyTips.map((tip, index) => (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={tip.icon as any} size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{tip.title}</CardTitle>
                        <CardDescription className="text-base">{tip.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Icon name="Lightbulb" size={28} />
                  Важно помнить
                </CardTitle>
                <CardDescription className="text-white/90 text-base mt-4">
                  Безопасность в интернете — это не разовая задача, а постоянная практика. Регулярно обновляйте пароли, 
                  следите за новостями о киберугрозах и обучайте правилам безопасности своих близких.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        )}

        {activeSection === 'communication' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Интернет-коммуникации
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Современные сервисы для общения, обучения и совместной работы
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {communicationTools.map((tool, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Icon name={tool.icon as any} size={28} className="text-white" />
                      </div>
                      <CardTitle className="text-2xl">{tool.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base mb-4">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-700">
                          <Icon name="Check" size={18} className="text-green-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'etiquette' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Сетевой этикет
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Правила культурного общения в интернете — нетикет
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="rules" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="rules" className="text-lg">Основные правила</TabsTrigger>
                  <TabsTrigger value="examples" className="text-lg">Примеры</TabsTrigger>
                </TabsList>
                
                <TabsContent value="rules" className="space-y-4">
                  {etiquetteRules.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-green-600 hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          {item.rule}
                        </CardTitle>
                        <CardDescription className="text-base ml-11">{item.details}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="examples" className="space-y-6">
                  <Card className="bg-red-50 border-red-200">
                    <CardHeader>
                      <CardTitle className="text-red-700 flex items-center gap-2">
                        <Icon name="X" size={24} />
                        Неправильно
                      </CardTitle>
                      <CardDescription className="text-base text-red-600 mt-4">
                        "СРОЧНО ОТВЕТЬ!!! ты вообще кто такой чтобы мне указывать????????"
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-700 flex items-center gap-2">
                        <Icon name="Check" size={24} />
                        Правильно
                      </CardTitle>
                      <CardDescription className="text-base text-green-600 mt-4">
                        "Здравствуйте! Могли бы вы ответить, когда будет удобно? Спасибо за понимание."
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                    <CardHeader>
                      <CardTitle className="text-xl">Золотое правило</CardTitle>
                      <CardDescription className="text-white/90 text-base mt-3">
                        Общайтесь в интернете так, как вы общались бы лично. Помните: за каждым аккаунтом — живой человек с чувствами.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="space-y-8 animate-fade-in max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-slate-600">
                Свяжитесь со мной для получения дополнительной информации
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
                <CardDescription className="text-base">
                  Заполните форму, и я отвечу вам в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Форма отправлена! (это демо-версия)'); }}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Имя</label>
                    <Input id="name" placeholder="Ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Сообщение</label>
                    <Textarea id="message" placeholder="Ваше сообщение..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full text-lg py-6" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Mail" size={24} className="text-primary" />
                    Email
                  </CardTitle>
                  <CardDescription className="text-base">teacher@school.edu</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="School" size={24} className="text-primary" />
                    Кабинет
                  </CardTitle>
                  <CardDescription className="text-base">№ 305, 3 этаж</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-20 border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Laptop" size={24} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Информатика и ИКТ</p>
                <p className="text-sm text-slate-600">Образовательный портал</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
