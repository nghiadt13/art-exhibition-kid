export default function ArtistCard() {
  return (
    <div className="content-card-bg p-8 rounded-[40px] border-2 border-outline-variant relative wonky-rotation-alt overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-container/20 rounded-bl-[100%]" />

      {/* Artist Info */}
      <div className="flex items-center gap-6 mb-6">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-surface-container">
          <img
            className="w-full h-full object-cover"
            alt="Bé Minh Quân"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1vQjWlfz4SfRIUktGDTmPxXDnH7HnuFk5XDzXXVyWw9hOd73Q5M1SPlWbPavS91ypcPojmIGwwv0eZMZuWolBxazENnc4SqIo2XI2uky1iKJlhDaTNXXne_TeLJJOUSDE7UwsIaD1X1nrKO7CEvjrE0VRIdUNhVBgWAfcTzWFboysXYug5Z5t7q0GfqHkNKqnYS8RplEBrccD87CnZ0uHJ-PhSMvhxk8w3cL9bBF7o1LD6GveLmjtbldVWueL7RuxFy2nQcJR1A7h"
          />
        </div>
        <div>
          <h2 className="font-headline text-[32px] leading-[1.3] font-bold text-tertiary">
            Bé Minh Quân
          </h2>
          <p className="text-[18px] leading-[1.6] font-body text-on-surface-variant">
            7 tuổi • Quảng Ngãi
          </p>
        </div>
      </div>

      {/* Dream Quote */}
      <div className="space-y-4">
        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white/80">
          <h3 className="font-body text-sm font-semibold text-primary uppercase tracking-wider mb-1">
            Ước mơ của em
          </h3>
          <p className="text-base font-body text-on-background">
            &ldquo;Em muốn trở thành một phi công để có thể bay cao thật cao,
            vượt qua những ngọn núi sau nhà để nhìn thấy thành phố rực rỡ ánh
            đèn.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
